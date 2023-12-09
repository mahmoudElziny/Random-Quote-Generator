var quotes = [`Be yourself; everyone else is already taken.
    - Oscar Wilde`,
    `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.
    - Albert Einstein`,
    `So many books, so little time.
    - Frank Zappa`,
    `A room without books is like a body without a soul.
    - Marcus Tullius Cicero`,
    `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.
    - Bernard M. Baruch`,
    `You know you're in love when you can't fall asleep because reality is finally better than your dreams.
    - Dr. Seuss`,
    `You only live once, but if you do it right, once is enough.
    - Mae West`,
    `Be the change that you wish to see in the world.
    - Mahatma Gandhi`,
    `In three words I can sum up everything I've learned about life: it goes on.
    - Robert Frost`,
    `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.
    - J.K. Rowling, Harry Potter and the Goblet of Fire`,
    `Don't walk in front of me... I may not follow
    Don't walk behind me... I may not lead
    Walk beside me... just be my friend
    - Albert Camus`,
    `If you tell the truth, you don't have to remember anything.
    - Mark Twain`,
    `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself ...
    - C.S. Lewis, The Four Loves`,
    `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.
    - Maya Angelou`,
    `A friend is someone who knows all about you and still loves you.
    - Elbert Hubbard`,
    `To live is the rarest thing in the world. Most people exist, that is all.
    - Oscar Wilde`,
    `Always forgive your enemies; nothing annoys them so much.
    - Oscar Wilde`,
    `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.
    - Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches`,
    `Live as if you were to die tomorrow. Learn as if you were to live forever.
    - Mahatma Gandhi`,
    `We accept the love we think we deserve.
    - Stephen Chbosky, The Perks of Being a Wallflower`,
    `Without music, life would be a mistake.
    - Friedrich Nietzsche, Twilight of the Idols`,
    `I am so clever that sometimes I don't understand a single word of what I am saying.
    - Oscar Wilde, The Happy Prince and Other Stories`,
    `To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.
    - Ralph Waldo Emerson`,
    `Insanity is doing the same thing, over and over again, but expecting different results.
    - Narcotics Anonymous`,
    `It is better to be hated for what you are than to be loved for what you are not.
    - Andre Gide, Autumn Leaves`,
    `Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.
    - H. Jackson Brown Jr., P.S. I Love You`];

    document.getElementById("btn").onclick = function (){
        var randomNumber = Math.floor( Math.random() * quotes.length);
        document.getElementById("quote").innerHTML = `"${quotes[randomNumber]}"`;        
    }

 


   