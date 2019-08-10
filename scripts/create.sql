CREATE TABLE IF NOT EXISTS url (
  hash VARCHAR(16) NOT NULL,
  original_url VARCHAR(512),
  account_id INT8,
  created_at TIMESTAMP DEFAULT now(),
  PRIMARY KEY (hash)
);

CREATE TABLE IF NOT EXISTS account (
  account_id BIGSERIAL NOT NULL,
  name VARCHAR(20),
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  PRIMARY KEY (account_id)
);

CREATE INDEX idx_url_original_url ON url(original_url);