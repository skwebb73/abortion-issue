  $('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': 'When was abortion first banned in North Carolina',
        'options': [
          '1973',
          '1881',
          '2019',
          '1870'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect'
      },
      {
        'q': "Who created the content for The Daily Tar Heel's Abortion Special Issue?",
        'options': [
          'Only newsroom editors',
          'Female and nonbinary members of the newsroom'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect'
      },
      {
        'q': 'When was Roe v. Wade overturned?',
      'options': [
        'March 2022',
        'July 2022',
        'August 2022',
        'June 2022'
      ],
      'correctIndex': 3,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Incorrect'
      },
      {
        'q': 'How many abortion clinics are there in North Carolina?',
        'options': [
          '14',
          '20',
          '8'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect'
      },
      {
        'q': 'Which act was passed by the N.C. General Assembly in 2011',
        'options': [
          'Abortion Rights Act',
          "Woman's Right to Abortion Act",
          "Woman's Right to Know Act",
          'Abortion Restrictions Act'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect'
      }
    ]
  });
