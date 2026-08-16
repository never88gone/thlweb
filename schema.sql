-- Cloudflare D1 数据库 Schema
-- 用于 TestFlight 申请记录存储
-- 执行方式: wrangler d1 execute DB --file=schema.sql

CREATE TABLE IF NOT EXISTS applications (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  app_id         TEXT    NOT NULL,
  app_name       TEXT    NOT NULL,
  email          TEXT    NOT NULL,
  order_id       TEXT    NOT NULL,
  icloud         TEXT,
  screenshot_url TEXT,
  created_at     TEXT    NOT NULL DEFAULT (datetime('now')),
  status         TEXT    NOT NULL DEFAULT 'pending',
  reviewed_at    TEXT,
  review_note    TEXT
);

CREATE INDEX IF NOT EXISTS idx_app_id     ON applications(app_id);
CREATE INDEX IF NOT EXISTS idx_status     ON applications(status);
CREATE INDEX IF NOT EXISTS idx_created_at ON applications(created_at);
