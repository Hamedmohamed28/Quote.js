
var Quotes = [
    {'author': " Oscar Wilde", 
     'quote': "Be yourself; everyone else is already taken."
    },

    {'author': "Albert Einstein", 
     'quote': "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },

    {'author': "Frank Zappa", 
     'quote': "So many books, so little time."
    },

    {'author': 'Marcus Tullius Cicero', 
     'quote': "A room without books is like a body without a soul"
    },

    {'author': "Bernard M. Baruch", 
     'quote': "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    },
    
    {'author': " Mae West", 
     'quote': "You only live once, but if you do it right, once is enough."
    },
    {'author': " Robert Frost", 
     'quote': "In three words I can sum up everything I've learned about life: it goes on."
    },
];

function generator(){
    var random = Number.parseInt(Math.random()*Quotes.length + 1);
    document.querySelector('#quOutput').textContent = `\"${Quotes[random].quote}\"`;
    document.querySelector('#authOutput').textContent = `--${Quotes[random].author}`;
    
}
