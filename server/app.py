
import os
from flask import Flask, flash, request, redirect, url_for, send_from_directory, render_template, jsonify
from werkzeug.utils import secure_filename

from flask_mysqldb import MySQL
from flask_mail import Mail, Message
from flask_cors import CORS
from flask_jwt_extended import (
    create_access_token, create_refresh_token,
    get_jwt_identity, jwt_required, JWTManager
)
from datetime import timedelta

UPLOAD_FOLDER = './static/img'  # Thư mục để lưu trữ tệp tải lên
UPLOAD_FOLDER_Blog = './static/Blog'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app = Flask(__name__)
CORS(app, support_credentials=True)

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'python_cuoiki'
mysql = MySQL(app)

# JWT configurations
app.config["JWT_SECRET_KEY"] = "super-secret"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=2)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=30)
jwt = JWTManager(app)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'nguyenhuynhan.dn@gmail.com'
app.config['MAIL_PASSWORD'] = 'rkif gdqq cdwk tqmj'
app.config['MAIL_USE_TLS'] = True
mail = Mail(app)

# img
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['UPLOAD_FOLDER_Blog'] = UPLOAD_FOLDER_Blog
# route
@app.route('/')
def home():
    return '<h1>Welcome</h1>'
@app.route('/about')
def about():
    return '<h1>About us</h1>'
@app.route('/user/getuser')
def getuser():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM user")
        columns = [col[0] for col in cursor.description]
        results = cursor.fetchall()
        cursor.close()
        data = [dict(zip(columns, row)) for row in results]
        return jsonify(data)
    except Exception as e:
        return jsonify({"message": f"Error fetching data: {e}"}), 500


@app.route('/user/adduser', methods=['POST'])
def register():
    try:
        username = request.json['email']
        password = request.json['password']
        role = 'user'
        cursor = mysql.connection.cursor()
        sql = "INSERT INTO user (email, password, role) VALUES (%s, %s, %s)"
        val = (username, password, role)
        cursor.execute(sql, val)
        mysql.connection.commit()
        cursor.close()
        msg = Message("Đăng kí Tài Khoản Website Tuyển Dụng Thành Công ",
                      sender='nguyenhuynhan.dn@gmail.com', recipients=[username])
        msg.body = f"Username: {username}\nPassword: {password}"
        mail.send(msg)
        return jsonify({"message": "Thêm dữ liệu thành công!"})
    except Exception as e:
        return jsonify({"message": f"Thêm dữ liệu không thành công: {e}"}), 500


@app.route('/user/login', methods=['POST'])
def signup():
    try:
        username = request.json['email']
        password = request.json['password']
        cursor = mysql.connection.cursor()
        sql = "SELECT email, role FROM user WHERE email = %s AND password = %s"
        val = (username, password)
        cursor.execute(sql, val)
        result = cursor.fetchone()
        cursor.close()
        if result:
            email, role = result
            # lấy username làm jwt
            access_token = create_access_token(identity=username)
            refresh_token = create_refresh_token(identity=username)
            return jsonify({"email": email, "token": access_token, "role": role}), 200
        else:
            return jsonify({"message": "Invalid username or password"}), 401
    except Exception as e:
        return jsonify({"message": f"Login failed: {e}"}), 500


@app.route("/post/create", methods=['GET'])
# @jwt_required()
def showPost():
    try:
        # current_user = get_jwt_identity()
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM post")
        columns = [col[0] for col in cursor.description]
        results = cursor.fetchall()
        cursor.close()
        data = [dict(zip(columns, row)) for row in results]
        return jsonify(data)
    except Exception as e:
        return jsonify({"message": f"Xem dữ liệu không thành công: {e}"}), 500


@app.route("/post/create", methods=["POST"])
def addPost():
    try:
        data = request.json
        cursor = mysql.connection.cursor()
        cursor.execute("""
            INSERT INTO post (congti, luong, vitri, khuvuc, level, anh, language, timedang, soluong, kinhnghiem, bangcap, mota, yeucau)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (data['congti'], data['luong'], data['vitri'], data['khuvuc'], data['level'], data['anh'], data['language'],
              data['timedang'], data['soluong'], data['kinhnghiem'], data['bangcap'], data['mota'], data['yeucau']))
        mysql.connection.commit()
        cursor.close()
        return jsonify({"message": "Bài viết đã được thêm thành công."}), 201
    except Exception as e:
        return jsonify({"message": f"Thêm dữ liệu không thành công: {e}"}), 500


@app.route("/post/delete/<string:post_id>", methods=["DELETE"])
def deletePost(post_id):
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("DELETE FROM post WHERE _id = %s", (post_id,))
        mysql.connection.commit()
        cursor.close()
        return jsonify({"message": "Bài viết đã được xóa thành công."}), 200
    except Exception as e:
        return jsonify({"message": f"Xóa dữ liệu không thành công: {e}"}), 500


@app.route("/post/update/<string:post_id>", methods=["PUT"])
def updatePost(post_id):
    try:
        data = request.json
        cursor = mysql.connection.cursor()
        cursor.execute("""
            UPDATE post
            SET congti=%s, luong=%s, vitri=%s, khuvuc=%s, level=%s, anh=%s, language=%s, timedang=%s, soluong=%s, kinhnghiem=%s, bangcap=%s, mota=%s, yeucau=%s
            WHERE _id=%s
        """, (data['congti'], data['luong'], data['vitri'], data['khuvuc'], data['level'], data['anh'], data['language'],
              data['timedang'], data['soluong'], data['kinhnghiem'], data['bangcap'], data['mota'], data['yeucau'], post_id))
        mysql.connection.commit()
        cursor.close()
        return jsonify({"message": "Bài viết đã được cập nhật thành công."}), 200
    except Exception as e:
        return jsonify({"message": f"Cập nhật dữ liệu không thành công: {e}"}), 500


@app.route('/protected')
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    if current_user is None:
        return jsonify({"message": "Không có người dùng được xác thực."}), 401
    return jsonify({"message": "Thành công refresh", "current_user": current_user})


@app.route("/post/recruitment/by/<int:post_id>", methods=["GET"])
def getPostById(post_id):
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM post WHERE _id = %s", (post_id,))
        post = cursor.fetchone()
        cursor.close()
        if post:
            post_dict = {
                "_id": post[0],
                "congti": post[1],
                "luong": post[2],
                "vitri": post[3],
                "khuvuc": post[4],
                "level": post[5],
                "anh": post[6],
                "language": post[7],
                "timedang": post[8],
                "soluong": post[9],
                "kinhnghiem": post[10],
                "bangcap": post[11],
                "mota": post[12],
                "yeucau": post[13],

            }
            return jsonify(post_dict), 200
        else:
            return jsonify({"message": f"Không tìm thấy bài viết có ID {post_id}"}), 404
    except Exception as e:
        return jsonify({"message": f"Lấy dữ liệu không thành công: {e}"}), 500


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/Images/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


@app.route('/Images_Blog/<filename>')
def uploaded_fileBlog(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER_Blog'], filename)

# cong ti


@app.route('/company')
def getCompany():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM company")
        columns = [col[0] for col in cursor.description]
        results = cursor.fetchall()
        cursor.close()
        data = [dict(zip(columns, row)) for row in results]
        return jsonify(data)
    except Exception as e:
        return jsonify({"message": f"Xem dữ liệu không thành công: {e}"}), 500

# blog


@app.route('/blog')
def getBlog():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM blog")
        columns = [col[0] for col in cursor.description]
        results = cursor.fetchall()
        cursor.close()
        data = [dict(zip(columns, row)) for row in results]
        return jsonify(data)
    except Exception as e:
        return jsonify({"message": f"Xem dữ liệu không thành công: {e}"}), 500


@app.route('/blog/by/<int:post_id>', methods=['GET'])
def getBlog_byid(post_id):
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM blog WHERE _id = %s", (post_id,))
        post = cursor.fetchone()
        cursor.close()
        if post:
            post_dict = {
                "_id": post[0],
                "title": post[1],
                "desc": post[2],
                "category": post[3],
                "cover": post[4],
                "date": post[5],
            }
            return jsonify(post_dict), 200
        else:
            return jsonify({"message": f"Không tìm thấy bài Blog có ID {post_id}"}), 404
    except Exception as e:
        return jsonify({"message": f"Lấy dữ liệu không thành công: {e}"}), 500


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='localhost', port=port)
