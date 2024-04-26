const quiz = [
    {
        "subject": "Sport",
        "quiz": [
            {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Houston Rocket"
                ],
                "answer": "Houston Rocket"
            }
        ]
    },
    {
        "subject": "Math",
        "quiz": [
            {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        ]
    }

]

/* 
    Challenge: 30 mins
    Display all the subject, question and corresponding answers with the following format
    e.g.
    Subject:  Sport
    Question 1:  Which one is correct team name in NBA?
    Answer:  Houston Rocket
    -----------------------
    Subject:  Math
    Question 1:  5 + 7 = ?
    Answer:  12
    Question 2:  12 - 8 = ?
    Answer:  4
*/

// Write your answer here


    quiz.forEach((subjectItem) => {
        console.log(`Subject: ${subjectItem.subject}`);
        subjectItem.quiz.forEach((item, index) => {
            console.log(`Question ${index + 1}: ${item.question}`);
            console.log(`Answer: ${item.answer}`);
            console.log('-----------------------');
        });
    });
