import requests
import jwt
import json
import time
import os
import schedule
from datetime import datetime

# 多个目标 APP 对应的独立鉴权配置与信息
APPS_CONFIG = {
    "hsb-browser": {
        "name": "糖葫芦浏览器", 
        "apple_id": "1111111111",
        "auth": {
            "key_id": "BROWSER_YOUR_KEY_ID",
            "issuer_id": "BROWSER_YOUR_ISSUER_ID",
            "p8_path": "Browser_AuthKey.p8"
        }
    },
    "hsb-screen": {
        "name": "糖葫芦投屏", 
        "apple_id": "2222222222",
        "auth": {
            "key_id": "MAIN_YOUR_KEY_ID",
            "issuer_id": "MAIN_YOUR_ISSUER_ID",
            "p8_path": "Main_AuthKey.p8"
        }
    },
    "hsb-tv": {
        "name": "糖葫芦TV", 
        "apple_id": "3333333333",
        "auth": {
            "key_id": "MAIN_YOUR_KEY_ID",
            "issuer_id": "MAIN_YOUR_ISSUER_ID",
            "p8_path": "Main_AuthKey.p8"
        }
    },
    "hsb-pdf": {
        "name": "糖葫芦PDF", 
        "apple_id": "4444444444",
        "auth": {
            "key_id": "MAIN_YOUR_KEY_ID",
            "issuer_id": "MAIN_YOUR_ISSUER_ID",
            "p8_path": "Main_AuthKey.p8"
        }
    }
}

def generate_token(auth_config):
    if not auth_config:
        return None
    try:
        with open(auth_config['p8_path'], 'r') as f:
            private_key = f.read()

        headers = {
            "kid": auth_config['key_id'],
            "typ": "JWT"
        }
        payload = {
            "iss": auth_config['issuer_id'],
            "exp": int(time.time()) + 1200, 
            "aud": "appstoreconnect-v1"
        }
        token = jwt.encode(payload, private_key, algorithm="ES256", headers=headers)
        return token
    except Exception as e:
        print(f"Error generating token for {auth_config.get('key_id')}: {e}")
        return None

def fetch_app_metrics():
    print(f"[{datetime.now()}] Fetching dashboard data for multiple apps...")
    
    today = datetime.now().strftime('%Y-%m-%d')
    
    # 最终输出的聚合数据字典
    aggregate_data = {
        "fetch_date": today,
        "metrics": {}
    }

    # 循环获取每一个 app_id 的数据
    for code, info in APPS_CONFIG.items():
        token = generate_token(info.get('auth'))
        if not token:
            print(f"Missing or invalid auth token for {info['name']}.")
            
        # 这里放置真实的 Requests URL 查询
        # requests.get(f"https://api.appstoreconnect.apple.com/v1/apps/{info['apple_id']}/perfPowerMetrics", headers={"Authorization": f"Bearer {token}"})
        
        # 目前产生 Mock 演示数据
        # 利用名字长度或随机种子做个区分，展示不同折线效果
        base = len(info['name']) * 10 
        aggregate_data["metrics"][code] = {
            "app_name": info["name"],
            "apple_id": info["apple_id"],
            "testflight_trends": [
                {"date": "Day 1", "users": base + 10},
                {"date": "Day 2", "users": base + 18},
                {"date": "Day 3", "users": base + 15},
                {"date": "Day 4", "users": base + 24},
                {"date": "Day 5", "users": base + 30},
            ],
            "active_user_trends": [
                {"date": "Day 1", "users": base * 50},
                {"date": "Day 2", "users": base * 55},
                {"date": "Day 3", "users": base * 53},
                {"date": "Day 4", "users": base * 60},
                {"date": "Day 5", "users": base * 68},
            ]
        }

    output_dir = os.path.join(os.path.dirname(__file__), "..", "web", "public", "data")
    if not os.path.exists(output_dir):
         os.makedirs(output_dir)

    output_file = os.path.join(output_dir, "metrics.json")
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
             json.dump(aggregate_data, f, ensure_ascii=False, indent=2)
        print(f"[{datetime.now()}] Successfully saved multi-app data at {output_file}")
    except Exception as e:
        print(f"Error saving data: {e}")

if __name__ == "__main__":
    fetch_app_metrics()
    schedule.every().day.at("02:00").do(fetch_app_metrics)
    
    print("Scheduler started. Press Ctrl+C to exit.")
    while True:
        schedule.run_pending()
        time.sleep(60)
