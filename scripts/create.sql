CREATE TABLE IF NOT EXISTS url (
  hash VARCHAR(16) NOT NULL,
  original_url VARCHAR(512),
  created_at TIMESTAMP DEFAULT now(),
  account_id INT8,
  PRIMARY KEY (hash)
);

CREATE TABLE IF NOT EXISTS account (
  account_id BIGSERIAL NOT NULL,
  name VARCHAR(20),
  created_at TIMESTAMP DEFAULT now(),
  last_login TIMESTAMP,
  PRIMARY KEY (account_id)
);