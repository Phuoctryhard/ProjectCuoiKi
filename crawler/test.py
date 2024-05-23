from pymongo import MongoClient 
import pandas as pd

mongoURI = 'mongodb+srv://adminPBL4:admin@pbl4.xemvqhk.mongodb.net/PBL4?retryWrites=true&w=majority'
DATABASE_NAME = "PBL4"

def test():
    try:
        print("Connecting to MongoDB...")
        client = MongoClient(mongoURI)
        db = client[DATABASE_NAME]
        collection = db['posts']
        if client.server_info():
            print("Connected to MongoDB!")
            # read excel file
            df = pd.read_excel('./result/laptrinhvienit_2023-12-23_posts.xlxs')
            data = df.to_dict('records')
            # insert data to mongodb
            collection.delete_many({}) #delete old posts
            collection.insert_many(data)
            print("Inserted ", len(data), " posts to MongoDB!")
            client.close()
            print("Connection closed!")
    except Exception as e:
            print(f"Error: {e}")
            
if __name__ == "__main__":
    test()