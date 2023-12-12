-- RETRIEVE PROJECTS AND STACK AGGREGATED INTO A SINGLE STRING DIVIDED BY '|'

TODO: AGGREGATE WITH A JSON OBJECT

SELECT nome,
    img_url,
    url,
    repo,
    status,
    (
        SELECT string_agg(B.NOME, '|')
        FROM tech B,
            stack C
        WHERE b.id = C.tech_id
            AND C.projects_id = A.id
    ) AS STACK
FROM projects A