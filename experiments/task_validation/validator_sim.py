import json, hashlib, datetime

def canonical(obj): return json.dumps(obj, sort_keys=True, separators=(',', ':')).encode()
def sha256_hex(b: bytes) -> str: return hashlib.sha256(b).hexdigest()

sample = {
  "task_id": "capture_image_v1",
  "executor": "agent:PiNode01",
  "timestamp": datetime.datetime.utcnow().isoformat() + "Z",
  "location": [-6.2, 106.8],
  "artifacts": ["ipfs://bafy...image.jpg"],
  "validators": ["valA"]
}
payload = canonical(sample)
sample["hash"] = sha256_hex(payload)
print(json.dumps(sample, indent=2))
