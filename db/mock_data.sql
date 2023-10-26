INSERT INTO TIMELINE (name, description, year, duration, status)
VALUES (
        'Project 1',
        'Description 1',
        2023,
        '3 months',
        'S'
    ),
    (
        'Project 2',
        'Description 2',
        2022,
        '6 months',
        'N'
    ),
    (
        'Project 3',
        'Description 3',
        2021,
        '4 months',
        'S'
    ),
    (
        'Project 4',
        'Description 4',
        2020,
        '8 months',
        'S'
    ),
    (
        'Project 5',
        'Description 5',
        2019,
        '5 months',
        'N'
    ),
    (
        'Project 6',
        'Description 6',
        2018,
        '7 months',
        'S'
    ),
    (
        'Project 7',
        'Description 7',
        2017,
        '9 months',
        'S'
    ),
    (
        'Project 8',
        'Description 8',
        2016,
        '6 months',
        'N'
    ),
    (
        'Project 9',
        'Description 9',
        2015,
        '3 months',
        'S'
    ),
    (
        'Project 10',
        'Description 10',
        2014,
        '10 months',
        'S'
    ),
    (
        'Project 11',
        'Description 11',
        2013,
        '4 months',
        'N'
    ),
    (
        'Project 12',
        'Description 12',
        2012,
        '8 months',
        'S'
    ),
    (
        'Project 13',
        'Description 13',
        2011,
        '7 months',
        'N'
    ),
    (
        'Project 14',
        'Description 14',
        2010,
        '5 months',
        'S'
    );

--------------------------------------------------------------------------------

INSERT INTO PROJECTS (nome, img_url, url, repo, status, stack)
VALUES (
        'Project 1',
        'https://example.com/img1.jpg',
        'https://example.com/project1',
        'https://github.com/project1',
        'S',
        'Stack 1'
    ),
    (
        'Project 2',
        'https://example.com/img2.jpg',
        'https://example.com/project2',
        'https://github.com/project2',
        'N',
        'Stack 2'
    ),
    (
        'Project 3',
        'https://example.com/img3.jpg',
        'https://example.com/project3',
        'https://github.com/project3',
        'S',
        'Stack 3'
    ),
    (
        'Project 4',
        'https://example.com/img4.jpg',
        'https://example.com/project4',
        'https://github.com/project4',
        'S',
        'Stack 4'
    ),
    (
        'Project 5',
        'https://example.com/img5.jpg',
        'https://example.com/project5',
        'https://github.com/project5',
        'N',
        'Stack 5'
    ),
    (
        'Project 6',
        'https://example.com/img6.jpg',
        'https://example.com/project6',
        'https://github.com/project6',
        'S',
        'Stack 6'
    ),
    (
        'Project 7',
        'https://example.com/img7.jpg',
        'https://example.com/project7',
        'https://github.com/project7',
        'S',
        'Stack 7'
    ),
    (
        'Project 8',
        'https://example.com/img8.jpg',
        'https://example.com/project8',
        'https://github.com/project8',
        'N',
        'Stack 8'
    ),
    (
        'Project 9',
        'https://example.com/img9.jpg',
        'https://example.com/project9',
        'https://github.com/project9',
        'S',
        'Stack 9'
    ),
    (
        'Project 10',
        'https://example.com/img10.jpg',
        'https://example.com/project10',
        'https://github.com/project10',
        'S',
        'Stack 10'
    ),
    (
        'Project 11',
        'https://example.com/img11.jpg',
        'https://example.com/project11',
        'https://github.com/project11',
        'N',
        'Stack 11'
    ),
    (
        'Project 12',
        'https://example.com/img12.jpg',
        'https://example.com/project12',
        'https://github.com/project12',
        'S',
        'Stack 12'
    ),
    (
        'Project 13',
        'https://example.com/img13.jpg',
        'https://example.com/project13',
        'https://github.com/project13',
        'N',
        'Stack 13'
    ),
    (
        'Project 14',
        'https://example.com/img14.jpg',
        'https://example.com/project14',
        'https://github.com/project14',
        'S',
        'Stack 14'
    );

------------------------------------------------------------------------

INSERT INTO POST (
        author,
        content,
        created_at,
        id,
        published,
        title
    )
VALUES (
        'John Doe',
        'Lorem ipsum content 1',
        '2023-10-26 10:00:00',
        1,
        true,
        'Sample Title 1'
    ),
    (
        'Alice Smith',
        'Dolor sit amet content 2',
        '2023-10-25 14:30:00',
        2,
        true,
        'Sample Title 2'
    ),
    (
        'Bob Johnson',
        'Consectetur adipiscing content 3',
        '2023-10-24 08:15:00',
        3,
        false,
        'Sample Title 3'
    ),
    (
        'Emma Brown',
        'Eligendi content 4',
        '2023-10-23 17:45:00',
        4,
        true,
        'Sample Title 4'
    ),
    (
        'David Lee',
        'Nihil impedit content 5',
        '2023-10-22 12:20:00',
        5,
        true,
        'Sample Title 5'
    ),
    (
        'Sarah Adams',
        'Doloremque content 6',
        '2023-10-21 09:30:00',
        6,
        false,
        'Sample Title 6'
    ),
    (
        'Michael Wilson',
        'Voluptate content 7',
        '2023-10-20 16:10:00',
        7,
        true,
        'Sample Title 7'
    ),
    (
        'Olivia Davis',
        'Mollitia content 8',
        '2023-10-19 11:55:00',
        8,
        true,
        'Sample Title 8'
    ),
    (
        'Daniel Clark',
        'Cupiditate content 9',
        '2023-10-18 13:40:00',
        9,
        false,
        'Sample Title 9'
    ),
    (
        'Sophia Moore',
        'Laboriosam content 10',
        '2023-10-17 15:25:00',
        10,
        true,
        'Sample Title 10'
    ),
    (
        'James Taylor',
        'Repellat content 11',
        '2023-10-16 20:05:00',
        11,
        false,
        'Sample Title 11'
    ),
    (
        'Lily Anderson',
        'Quas explicabo content 12',
        '2023-10-15 19:50:00',
        12,
        true,
        'Sample Title 12'
    ),
    (
        'William White',
        'Iusto content 13',
        '2023-10-14 18:00:00',
        13,
        false,
        'Sample Title 13'
    ),
    (
        'Ava Harris',
        'Inventore content 14',
        '2023-10-13 07:30:00',
        14,
        true,
        'Sample Title 14'
    );

------------------------------------------------------------------------

INSERT INTO PUBLIC.CONTACT 
(NOME, DESCRIPTION, ADDRESS, IMG, STATUS)
VALUES
(
    'EMAIL',
    'natanschneider@protonmail.com',
    'mailto:natanschneider@protonmail.com',
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"/></svg>',
    'S'
),
(
    'LinkedIn',
    'https://www.linkedin.com/in/natanschneider/',
    '/in/natanschneider/',
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/></svg>',
    'S'
),
(
    'Github',
    'https://github.com/natanschneider',
    '@natanschneider',
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>',
    'S'
),
(
    'Whatsapp',
    'https://whatsa.me/5551995559012',
    '51 99555-9012',
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/></svg>',
    'S'
);