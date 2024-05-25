# Nếu bạn muốn gửi dữ liệu dưới dạng JSON, bạn sẽ cần sử dụng JSON.stringify để chuyển đổi đối tượng formData thành một chuỗi JSON và đặt tiêu đề Content-Type thành application/json trong yêu cầu của bạn, như đã thảo luận trước đó. Tuy nhiên, trong trường hợp này, việc gửi dưới dạng multipart/form-data phù hợp với việc gửi các tệp tin (như cv) từ form.

# 415 cho biết máy chủ từ chối chấp nhận yêu cầu vì định dạng tải trọng ở định dạng không được hỗ trợ.

# from flask import Flask, jsonify, request

# import mysql.connector

# app = Flask(**name**)

# # MySQL configurations

# mysql_config = {

# 'host': 'ngodinhphuoc.mysql.pythonanywhere-services.com',

# 'user': 'ngodinhphuoc',

# 'password': 'phuocyeuem2k3',

# 'database': 'ngodinhphuoc$flask_cuoi'

# }

# @app.route('/')

# def home():

# return jsonify({"message": "anh yêu em"})

# @app.route('/anh')

# def anh():

# return jsonify({"message": "anh yêu em anh"})

# @app.route('/user')

# def about():

# try:

# connection = mysql.connector.connect(\*\*mysql_config)

# cursor = connection.cursor()

# cursor.execute("SELECT \* FROM user")

# columns = [col[0] for col in cursor.description] # Get column names

# results = cursor.fetchall()

# cursor.close()

# # Convert results to a list of dictionaries

# data = [dict(zip(columns, row)) for row in results]

# return jsonify(data)

# except Exception as e:

# return jsonify({"message": "Error fetching data", "error": str(e)})

# finally:

# if 'connection' in locals() and connection.is_connected():

# connection.close()

# @app.route('/insert', methods=['POST'])

# def insert():

# try:

# connection = mysql.connector.connect(\*\*mysql_config)

# cursor = connection.cursor()

# sql = "INSERT INTO user (name, email) VALUES (%s, %s)"

# val = ("minh dep trai ", "minh xau gai")

# cursor.execute(sql, val)

# connection.commit()

# cursor.close()

# return jsonify({"message": "Thêm dữ liệu thành công!"})

# except Exception as e:

# return jsonify({"message": "Thêm dữ liệu không thành công", "error": str(e)})

# finally:

# if 'connection' in locals() and connection.is_connected():

# connection.close()

# @app.route('/delete/<string:name_data>', methods=['DELETE'])

# def delete(name_data):

# try:

# connection = mysql.connector.connect(\*\*mysql_config)

# cursor = connection.cursor()

# sql = "DELETE FROM user WHERE id = %s"

# cursor.execute(sql, (name_data,))

# connection.commit()

# cursor.close()

# return jsonify({"message": "Xóa dữ liệu thành công!"})

# except Exception as e:

# return jsonify({"message": "Xóa dữ liệu không thành công", "error": str(e)})

# finally:

# if 'connection' in locals() and connection.is_connected():

# connection.close()

# @app.route('/update', methods=['PUT'])

# def update():

# data = request.json

# name = data.get('name')

# email = data.get('email')

# id = data.get('id')

# try:

# connection = mysql.connector.connect(\*\*mysql_config)

# cursor = connection.cursor()

# cursor.execute("UPDATE user SET name=%s, email=%s WHERE id=%s", (name, email, id))

# connection.commit()

# cursor.close()

# return jsonify({"message": "Data Updated Successfully"})

# except Exception as e:

# return jsonify({"message": "Error updating data", "error": str(e)})

# finally:

# if 'connection' in locals() and connection.is_connected():

# connection.close()

# @app.route('/join')

# def join():

# try:

# connection = mysql.connector.connect(\*\*mysql_config)

# cursor = connection.cursor()

# sql = "SELECT user.name AS users, products.name AS favorites FROM user INNER JOIN products ON user.product = products.id"

# cursor.execute(sql)

# myresult = cursor.fetchall()

# cursor.close()

# return jsonify(myresult)

# except Exception as e:

# return jsonify({"message": "Error executing join query", "error": str(e)})

# finally:

# if 'connection' in locals() and connection.is_connected():

# connection.close()

# @app.route('/test_db')

# def test_db():

# try:

# connection = mysql.connector.connect(\*\*mysql_config)

# connection.ping()

# return jsonify({"message": "Database connection successful!"})

# except Exception as e:

# return jsonify({"message": "Database connection failed!", "error": str(e)})

# finally:

# if 'connection' in locals() and connection.is_connected():

# connection.close()

import mysql.connector
import os
from flask import Flask, flash, request, redirect, url_for, send_from_directory, render_template, jsonify
from werkzeug.utils import secure_filename
from flask_mail import Mail, Message
from flask_cors import CORS
import traceback
from flask_jwt_extended import (
create_access_token, create_refresh_token,
get_jwt_identity, jwt_required, JWTManager
)
from datetime import timedelta
UPLOAD_FOLDER = '/home/ngodinhphuoc/flask/static/img' # Thư mục để lưu trữ tệp tải lên
UPLOAD_FOLDER_Blog = '/home/ngodinhphuoc/flask/static/Blog'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app = Flask(**name**)
CORS(app, support_credentials=True)

# CORS(app, resources={r"/\*": {"origins": "http://localhost:3000"}})

conn = mysql.connector.connect(
host="ngodinhphuoc.mysql.pythonanywhere-services.com",
user="ngodinhphuoc",
password="phuocyeuem2k3",
database="ngodinhphuoc$flask_cuoiki"
)

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
cursor = conn.cursor(buffered=True)
cursor.execute("SELECT \* FROM user")
columns = [col[0] for col in cursor.description] # Đảm bảo rằng bạn đã đọc hết kết quả trước khi thực hiện truy vấn mới
results = cursor.fetchall()
data = [dict(zip(columns, row)) for row in results]
cursor.close()
return jsonify(data)
except Exception as e:
return jsonify({"message": f"Error fetching data: {e}"}), 500

@app.route('/user/adduser', methods=['POST'])
def register():
try:
username = request.json['email']
password = request.json['password']
role = 'user'
cursor = conn.cursor(buffered=True)
sql = "INSERT INTO user (email, password, role) VALUES (%s, %s, %s)"
val = (username, password, role)
cursor.execute(sql, val)
conn.commit()

        msg = Message("Đăng kí Tài Khoản Website Tuyển Dụng Thành Công ",
                      sender='nguyenhuynhan.dn@gmail.com', recipients=[username])
        msg.body = f"Username: {username}\nPassword: {password}"
        mail.send(msg)
        return jsonify({"message": "Thêm dữ liệu thành công!"})
    except Exception as e:
        traceback.print_exc()  # Ghi log chi tiết lỗi vào console
        return jsonify({"message": f"Thêm dữ liệu không thành công: {e}"}), 500

@app.route('/user/login', methods=['POST'])
def signup():
try:
username = request.json['email']
password = request.json['password']
cursor = conn.cursor(buffered=True)
sql = "SELECT email, role FROM user WHERE email = %s AND password = %s"
val = (username, password)
cursor.execute(sql, val) # Đảm bảo rằng bạn đã đọc kết quả trước khi thực hiện truy vấn mới
result = cursor.fetchone()
cursor.close() # Đóng truy vấn để giải phóng tài nguyên

        if result:
            email, role = result
            access_token = create_access_token(identity=username)
            refresh_token = create_refresh_token(identity=username)

            return jsonify({"email": email, "token": access_token, "role": role}), 200
        else:
            return jsonify({"message": "Invalid username or password"}), 401

    except Exception as e:
        traceback.print_exc()  # Ghi log chi tiết lỗi vào console
        return jsonify({"message": f"Login failed: {e}"}), 500

@app.route("/post/create", methods=['GET'])
def showPost():
try: # current_user = get_jwt_identity()
cursor = conn.cursor(buffered=True)
cursor.execute("SELECT \* FROM post")
columns = [col[0] for col in cursor.description]
results = cursor.fetchall()
cursor.close()
data = [dict(zip(columns, row)) for row in results]
return jsonify(data)
except Exception as e:
return jsonify({"message": f"Xem dữ liệu không thành công: {e}"}), 500

# tạo bài cần authentication

@app.route("/post/create", methods=["POST"])
@jwt*required()
def addPost():
try: # Access text fields
congti = request.form.get('congti')
luong = request.form.get('luong')
vitri = request.form.get('vitri')
khuvuc = request.form.get('khuvuc')
level = request.form.get('level')
timedang = request.form.get('timedang')
language = request.form.get('language')
id* = request.form.get('id')
soluong = request.form.get('soluong')
kinhnghiem = request.form.get('kinhnghiem')
bangcap = request.form.get('bangcap')
mota = request.form.get('mota')
yeucau = request.form.get('yeucau')
anh = request.files['anh']
if anh:
filename = secure_filename(anh.filename)
file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
anh.save(file_path) # data = request.json
cursor = conn.cursor(buffered=True) # print(data['anh'])
cursor.execute("""
INSERT INTO post (congti, luong, vitri, khuvuc, level, anh, language, timedang, soluong, kinhnghiem, bangcap, mota, yeucau)
VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
""", (congti, luong, vitri, khuvuc, level, filename, language,
timedang, soluong, kinhnghiem, bangcap, mota, yeucau)) # Truy cập các trường văn bản
conn.commit()
cursor.close()
return jsonify({"message": "Bài viết đã được thêm thành công."}), 201
except Exception as e:
return jsonify({"message": f"Thêm dữ liệu không thành công: {e}"}), 500

@app.route("/post/delete/<string:post_id>", methods=["DELETE"])
def deletePost(post_id):
try:
cursor = conn.cursor(buffered=True)
cursor.execute("DELETE FROM post WHERE \_id = %s", (post_id,))
conn.commit()
cursor.close()
return jsonify({"message": "Bài viết đã được xóa thành công."}), 200
except Exception as e:
return jsonify({"message": f"Xóa dữ liệu không thành công: {e}"}), 500

# lấy theo id

# @app.route("post/edit/recruitment/<string:post_id>",methods = ["GET"])

# @jwt_required()

# def getPost_byId(post_id):

# try:

# except Exception as e :

# return jsonify({"message": f"=Không thể chỉnh sửa dữ liệu : {e}"}), 500

# @app.route("/post/update/recruitment/<string:post_id>", methods=["PUT"])

# def updatePost(post_id):

# try:

# data = request.json

# cursor = conn.cursor()

# cursor.execute("""

# UPDATE post

# SET congti=%s, luong=%s, vitri=%s, khuvuc=%s, level=%s, anh=%s, language=%s, timedang=%s, soluong=%s, kinhnghiem=%s, bangcap=%s, mota=%s, yeucau=%s

# WHERE \_id=%s

# """, (data['congti'], data['luong'], data['vitri'], data['khuvuc'], data['level'], data['anh'], data['language'],

# data['timedang'], data['soluong'], data['kinhnghiem'], data['bangcap'], data['mota'], data['yeucau'], post_id))

# conn.commit()

        cursor.close()

# return jsonify({"message": "Bài viết đã được cập nhật thành công."}), 200

# except Exception as e:

# return jsonify({"message": f"Cập nhật dữ liệu không thành công: {e}"}), 500

@app.route("/post/update/recruitment/<string:post_id>", methods=["PUT"])
def update_post(post_id):
try:
data = request.json

        # Extract specific fields from the request data
        congti = data.get('congti')
        luong = data.get('luong')
        vitri = data.get('vitri')
        khuvuc = data.get('khuvuc')
        level = data.get('level')
        anh = data.get('anh')
        timedang = data.get('timedang')

        cursor = conn.cursor(buffered=True)
        cursor.execute("""
            UPDATE post
            SET congti=%s, luong=%s, vitri=%s, khuvuc=%s, level=%s, anh=%s, timedang=%s
            WHERE _id=%s
        """, (congti, luong, vitri, khuvuc, level, anh, timedang, post_id))
        conn.commit()
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

# admin get post

@app.route('/Post/recruitment', methods=['GET'])
@jwt_required()
def getPostbyAdmin():
try:
curent = get_jwt_identity()
print(curent)
cursor = conn.cursor(buffered=True)
cursor.execute("SELECT \* FROM post")
columns = [col[0] for col in cursor.description]
results = cursor.fetchall()
data = [dict(zip(columns, row)) for row in results]
return jsonify(data)
except Exception as e:
return jsonify({"message": f"Error fetching data: {e}"}), 500

# lấy theo id

@app.route("/post/edit/recruitment/<int:post_id>", methods=["GET"])
@jwt_required()
def getPos_tById(post_id):
try:
print(post_id)
cursor = conn.cursor(buffered=True)
cursor.execute("SELECT \* FROM post WHERE \_id = %s", (post_id,))
post = cursor.fetchone()
cursor.close()
if post:
post_dict = {
"\_id": post[0],
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

@app.route("/post/recruitment/by/<int:post_id>", methods=["GET"])

# @jwt_required()

def getPostById(post_id):
try:
cursor = conn.cursor(buffered=True)
cursor.execute("SELECT \* FROM post WHERE \_id = %s", (post_id,))
post = cursor.fetchone()
cursor.close()
if post:
post_dict = {
"\_id": post[0],
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
cursor = conn.cursor(buffered=True)
cursor.execute("SELECT \* FROM company")
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
cursor = conn.cursor(buffered=True)
cursor.execute("SELECT \* FROM blog")
columns = [col[0] for col in cursor.description]
results = cursor.fetchall()

        data = [dict(zip(columns, row)) for row in results]
        return jsonify(data)
    except Exception as e:
        return jsonify({"message": f"Xem dữ liệu không thành công: {e}"}), 500

@app.route('/blog/by/<int:post_id>', methods=['GET'])
def getBlog_byid(post_id):
try:
cursor = conn.cursor(buffered=True)
cursor.execute("SELECT \* FROM blog WHERE \_id = %s", (post_id,))
post = cursor.fetchone() # conn.close()
if post:
post_dict = {
"\_id": post[0],
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
print("Thành công")
