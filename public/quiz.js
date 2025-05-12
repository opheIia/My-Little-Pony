document.addEventListener('DOMContentLoaded', () => {
  const questions = [
  {
    question: "1. How do you usually spend your weekend or free time?",
    answers: {
      a: "Reading books or organizing my room.",
      b: "Dancing, singing, or hanging with friends.",
      c: "Helping family or cleaning the house."
    }
  },
  {
    question: "2. Your friends describe you in just one clear sentence:",
    answers: {
      a: "Loyal, brave, and always prepared.",
      b: "Sweet, calm, and very polite.",
      c: "Artistic, bold, and full drama."
    }
  },
  {
    question: "3. What quality do you value most in every friendship?",
    answers: {
      a: "Trust, honesty, and clear communication always.",
      b: "Fun, laughter, and sharing silly jokes.",
      c: "Support, kindness, and honest emotions."
    }
  },
  {
    question: "4. When you face a problem, how do you react?",
    answers: {
      a: "Think carefully, then make smart choices.",
      b: "Follow instincts and trust the moment.",
      c: "Talk it out with close friends."
    }
  },
  {
    question: "5. Your dream job would most likely be creative and helpful?",
    answers: {
      a: "Scientist, librarian, or logical thinker.",
      b: "Dancer, designer, or popular singer.",
      c: "Animal helper or outdoor nature guide."
    }
  },
  {
    question: "6. How do you most love expressing yourself every single day?",
    answers: {
      a: "Through writing poems or speaking out.",
      b: "Singing, dancing, or wild performances.",
      c: "Being helpful and kind to everyone."
    }
  },
  {
    question: "7. If you could pick any pet right now, what would it be?",
    answers: {
      a: "A loyal, smart, playful dog.",
      b: "A quiet, cute, fluffy bunny.",
      c: "A colorful, funny, cool bird."
    }
  },
  {
    question: "8. Two of your close friends are suddenly arguing. You then:",
    answers: {
      a: "Step in calmly and fix things.",
      b: "Walk away and avoid the fight.",
      c: "Talk to them both with care."
    }
  },
  {
    question: "9. How do you really feel when you’re surprised by something?",
    answers: {
      a: "I like knowing things in advance.",
      b: "Love it! It’s super exciting!",
      c: "It depends. Sometimes I panic."
    }
  },
  {
    question: "10. Which one of these life quotes fits your personality best?",
    answers: {
      a: "Hard work always brings good results.",
      b: "Smile wide, laugh loud, live big.",
      c: "True beauty grows from within hearts."
    }
  },
  {
    question: "11. At a party, what job would suit you perfectly every time?",
    answers: {
      a: "Planning food, timing, and invitations too.",
      b: "Being host, storyteller, and party starter.",
      c: "Decorating, lighting, and setting nice vibes."
    }
  },
  {
    question: "12. After failing at something, how do you handle the feeling?",
    answers: {
      a: "Try again with more careful thinking.",
      b: "Laugh it off. It happens, whatever.",
      c: "Get support and talk it out."
    }
  },
  {
    question: "13. What’s your favorite way to learn and absorb new knowledge?",
    answers: {
      a: "Books, notes, and deep research always.",
      b: "Try it myself and figure it.",
      c: "Observe others first, then jump in."
    }
  },
  {
    question: "14. You’re running late for something important. What’s your move?",
    answers: {
      a: "Apologize sincerely, then fix everything quickly.",
      b: "Make jokes and move on fast.",
      c: "Feel anxious and overthink it all."
    }
  },
  {
    question: "15. You get a full free day with nothing planned. You:",
    answers: {
      a: "Work on something useful and fun.",
      b: "Call friends and hang out outside.",
      c: "Relax quietly and treat yourself kindly."
    }
  },
  {
    question: "16. What’s your ultimate idea of fun and full enjoyment?",
    answers: {
      a: "Solving puzzles or escape room mysteries.",
      b: "Adventures like skating or riding coasters.",
      c: "Makeovers, spa, or relaxing self-care."
    }
  },
  {
    question: "17. You see someone being bullied badly. What’s your response?",
    answers: {
      a: "Step up confidently and defend them.",
      b: "Call for help and find support.",
      c: "Comfort them and listen with care."
    }
  },
  {
    question: "18. How do you really feel when there’s a big change?",
    answers: {
      a: "Nervous at first, but adapt well.",
      b: "Excited! Change is always super fun!",
      c: "Stressed easily, need some comfort fast."
    }
  },
  {
    question: "19. Of these traits, which one feels most true about you?",
    answers: {
      a: "Smart, deep, and very observant.",
      b: "Funny, clever, and always smiling.",
      c: "Kindhearted, caring, and emotionally aware."
    }
  },
  {
    question: "20. What moment makes you feel the happiest inside your heart?",
    answers: {
      a: "Finishing something big and meaningful.",
      b: "Laughing loud with friends around me.",
      c: "Being safe, warm, and deeply loved."
    }
  }
];
  let currentQuestionIndex = 0;
  let answers = { a: 0, b: 0, c: 0 };
  function displayQuestion(index) {
    const question = questions[index];
    document.getElementById("question-text").textContent = question.question;
    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach((btn, i) => {
      const answerKey = Object.keys(question.answers)[i];
      btn.textContent = question.answers[answerKey];
      btn.onclick = () => {
        answers[answerKey]++;
        nextQuestion();
      };
    });
  }
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion(currentQuestionIndex);
    } else {
      showResult();
    }
  }
  function showResult() {
  const a = answers.a;
  const b = answers.b;
  const c = answers.c;
  let resultPage = '';
  if (a > b && b >= c) {
    resultPage = 'views/twilight.html';
  } else if (b > a && a >= c) {
    resultPage = 'views/pinkie.html';
  } else if (c > a && a >= b) {
    resultPage = 'views/fluttershy.html';
  } else if (a === b && b > c) {
    resultPage = 'views/rainbow.html';
  } else if (b === c && c > a) {
    resultPage = 'views/rarity.html';
  } else {
    resultPage = 'views/applejack.html';
  }
  window.location.href = resultPage;
}
  displayQuestion(currentQuestionIndex);
});
