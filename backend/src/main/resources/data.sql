INSERT IGNORE INTO statuses (id, name)
VALUES (1, 'Applied'),
       (2, 'Rejected'),
       (3, 'Interviewing'),
       (4, 'Offer Extended');

INSERT IGNORE INTO companies (id, name, location, industry)
VALUES (1, 'Google', 'Mountain View, CA', 'Technology'),
       (2, 'Microsoft', 'Redmond, WA', 'Technology'),
       (3, 'Peraton', 'Chantilly, VA', 'Defense'),
       (4, 'Amazon', 'Seattle, WA', 'Technology'),
       (5, 'Lockheed Martin', 'Bethesda, MD', 'Defense');

INSERT IGNORE INTO applications (id, position_title, date_applied, salary, notes, status_id, company_id)
VALUES
  (1,  'Software Engineer',         '2026-03-20', 95000,  'Good company, no response',         1, 1),
  (2,  'Backend Developer',         '2026-03-10', 105000, 'Phone screen went well',             3, 1),
  (3,  'Cloud Engineer',            '2026-02-28', 110000, 'Waiting to hear back',               1, 4),
  (4,  'Data Engineer',             '2026-02-15', 98000,  'Strong team, good culture fit',      4, 2),
  (5,  'DevOps Engineer',           '2026-02-01', 115000, 'Great benefits package',             2, 4),
  (6,  'Systems Engineer',          '2026-01-20', 90000,  'Clearance required',                 3, 3),
  (7,  'Software Engineer II',      '2026-01-10', 120000, 'Offer received, negotiating',        4, 2),
  (8,  'Full Stack Developer',      '2026-03-01', 100000, 'Recruiter reached out',              1, 5),
  (9,  'Embedded Systems Engineer', '2026-02-10', 92000,  'Rejected after technical round',     2, 5),
  (10, 'Security Engineer',         '2026-03-15', 108000, 'Second round scheduled',             3, 3);

INSERT IGNORE INTO interviews (id, application_id, interview_date, interview_type, notes, contact_id)
VALUES
  (1, 2,  '2026-03-18 10:00:00', 'phone',   'Intro call with recruiter',        NULL),
  (2, 2,  '2026-03-25 14:00:00', 'virtual', 'Technical screen with team lead',  NULL),
  (3, 6,  '2026-02-05 09:00:00', 'phone',   'Initial screening',                NULL),
  (4, 6,  '2026-02-12 11:00:00', 'onsite',  'Panel interview with engineering',  NULL),
  (5, 7,  '2026-01-20 13:00:00', 'virtual', 'Technical round 1',                NULL),
  (6, 7,  '2026-01-27 15:00:00', 'virtual', 'Technical round 2',                NULL),
  (7, 7,  '2026-02-03 10:00:00', 'onsite',  'Final round with hiring manager',  NULL),
  (8, 10, '2026-03-22 09:30:00', 'phone',   'Recruiter intro call',             NULL);