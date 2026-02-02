CREATE TABLE confessions (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  display_name TEXT,
  message TEXT
);

INSERT INTO confessions (display_name, message) values
('Ishmax', 'My wife had her credit card stolen and I did not report it because the thief was spending less than her'),
('Valerie', 'I am addicted to lying. I lie about everything. Even this'),
('Banksy', 'Me and my friends go around randomly removing traffic signs'),
('Mahkbong', 'I secretly throw out my boyfriends clothes that I think are ugly'),
('Fire', 'I stayed up all night and married my cats. They are now husband and wife');

ALTER TABLE confessions
RENAME COLUMN message to messages