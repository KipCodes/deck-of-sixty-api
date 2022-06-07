const express = require(express)
const { response } = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const deck = {

    //CROWNS//
    'ace of crowns': {
        'value': 'ace',
        'suit': 'crowns',
        'faculty': 'domination',
        'class': 'nobility',
        'element': 'lightning',
        'astral/upright': 'Victory, public recognition, confidence',
        'umbral/upside down': 'Egotism, disrepute',
    },
    'two of crowns': {
        'value': 'two',
        'suit': 'crowns',
        'faculty': 'domination',
        'class': 'nobility',
        'element': 'lightning',
        'astral/upright': 'Challenge, competition, perseverance',
        'umbral/upside down': 'Overwhelmed, giving up',
    },
    'three of crowns': {
        'value': 'three',
        'suit': 'crowns',
        'faculty': 'domination',
        'class': 'nobility',
        'element': 'lightning',
        'astral/upright': 'Courage, persistence, resilience',
        'umbral/upside down': 'Devensive, destructive, paranoid',
    },
    'four of crowns': {
        'value': 'four',
        'suit': 'crowns',
        'faculty': 'domination',
        'class': 'nobility',
        'element': 'lightning',
        'astral/upright': 'Isolation, restriction',
        'umbral/upside down': 'Release, open to new perspectives',
    },
    'five of crowns': {
        'value': 'five',
        'suit': 'crowns',
        'faculty': 'domination',
        'class': 'nobility',
        'element': 'lightning',
        'astral/upright': 'Depression, anxiety',
        'umbral/upside down': 'Hopelessness, torment',
    },
    'six of crowns': {
        'value': 'six',
        'suit': 'corwns',
        'faculty': 'domination',
        'class': 'nobility',
        'element': 'lightning',
        'astral/upright': 'Hard work paying off, passion and confidence, big wins',
        'umbral/upside down': 'Lack of self-confidence, too many burdens, setbacks, bad luck',
    },
    'knave of crowns': {
        'value': 'knave',
        'suit': 'crowns',
        'faculty': 'domination',
        'class': 'nobility',
        'element': 'lightning',
        'astral/upright': 'Lack of motivation, restlessness, disappointment',
        'umbral/upside down': 'Bide one\'s time, self-reflect',
    },
    'lord of crowns': {
        'value': 'lord',
        'suit': 'crowns',
        'faculty': 'domination',
        'class': 'nobility',
        'element': 'lightning',
        'astral/upright': 'Opinionated, passionate',
        'umbral/upside down': 'Lusty, avoiding responsibility',
    },
    'lady of crowns': {
        'value': 'lady',
        'suit': 'crowns',
        'faculty': 'domination',
        'class': 'nobility',
        'element': 'lightning',
        'astral/upright': 'Energetic, curious',
        'umbral/upside down': 'Broken promises, all talk and no action',
    },
    'the spire': {
        'value': 'arcana',
        'suit': 'crowns',
        'faculty': 'domination',
        'class': 'nobility',
        'element': 'lightning',
        'astral/upright': 'Completion, integration, accomplishments; sudden changes, upheaval, or disaster looms and the adventurer should take caution; the emergence of a strubborn figure who will humble, frighten, or make them insecure at first, but time will reveal they are a helping force in their journey',
        'umbral/upside down': 'Destruction is necessary in creation; difficult change or transformation; do not be afraid to take risks, endure harships to grow; the emergence of a figure who will trigger drastic change that the adventurer will not be prepared for; impending doom on the horizon',
    },


    //CUPS//
    'ace of cups': {
        'value': 'ace',
        'suit': 'cups',
        'faculty': 'emotion',
        'class': 'clergy',
        'element': 'water',
        'astral/upright': 'Compassion, creativity, new beginnings, growth',
        'umbral/upside down': 'Blocked emotions, detatchment, heartbreak',
    },
    'two of cups': {
        'value': 'two',
        'suit': 'cups',
        'faculty': 'emotion',
        'class': 'clergy',
        'element': 'water',
        'astral/upright': 'New relationships, harmony, peace',
        'umbral/upside down': 'Deteriorating relations, troubling interactions, possible deceit',
    },
    'three of cups': {
        'value': 'three',
        'suit': 'cups',
        'faculty': 'emotion',
        'class': 'clergy',
        'element': 'water',
        'astral/upright': 'Abundance, revelry, celebration',
        'umbral/upside down': 'Overindulgence, poor communication, misunderstandings',
    },
    'four of cups': {
        'value': 'four',
        'suit': 'cups',
        'faculty': 'emotion',
        'class': 'clergy',
        'element': 'water',
        'astral/upright': 'Reflections, being too reserved or passive',
        'umbral/upside down': 'Dissatisfaction, boredom, ennui',
    },
    'five of cups': {
        'value': 'five',
        'suit': 'cups',
        'faculty': 'emotion',
        'class': 'clergy',
        'element': 'water',
        'astral/upright': 'Loss, regret, disappointment',
        'umbral/upside down': 'Emminent recovery, acceptance, good time to start something new',
    },
    'six of cups': {
        'value': 'six',
        'suit': 'cups',
        'faculty': 'emotion',
        'class': 'clergy',
        'element': 'water',
        'astral/upright': 'Relaxation, creativity, a good time to start something new creatively',
        'umbral/upside down': 'Immaturity, irresponsibility, avoidance',
    },
    'knave of cups': {
        'value': 'knave',
        'suit': 'cups',
        'faculty': 'emotion',
        'class': 'clergy',
        'element': 'water',
        'astral/upright': 'Wisdom, networking, learning, finding your path',
        'umbral/upside down': 'Manipulation, jealousy, drama, disappointment, stuck',
    },
    'lord of cups': {
        'value': 'lord',
        'suit': 'cups',
        'faculty': 'emotion',
        'class': 'clergy',
        'element': 'water',
        'astral/upright': 'Generousity, kindness, commitment',
        'umbral/upside down': 'Destructive, volatility, controlling behaviors',
    },
    'lady of cups': {
        'value': 'lady',
        'suit': 'cups',
        'faculty': 'emotion',
        'class': 'clergy',
        'element': 'water',
        'astral/upright': 'Positive influence, calmness, intuitive, self-care',
        'umbral/upside down': 'Insecurity, obsinant, dependant',
    },
    'the ewer': {
        'value': 'arcana',
        'suit': 'cups',
        'faculty': 'emotion',
        'class': 'clergy',
        'element': 'water',
        'astral/upright': 'Wisdom, undertanding; peace, serenity; knowledge, reflection; spiritual enlightenment, inner illumination, connection to the subconscious; pay attention to thoughts, emotions, and dreams; promoting intuition',
        'umbral/upside down': 'Lack of focus; inability to meditate or reflect; encourage reflection on the inner self and reconnect with their humanity',
    },


    //RINGS//
    'ace of rings': {
        'value': 'ace',
        'suit': 'rings',
        'faculty': 'possession',
        'class': 'merchants',
        'element': 'earth',
        'astral/upright': 'Manifestations, opportunity, prosperity',
        'umbral/upside down': 'Lack of planning, lack of foresight',
    },
    'two of rings': {
        'value': 'two',
        'suit': 'rings',
        'faculty': 'possession',
        'class': 'merchants',
        'element': 'earth',
        'astral/upright': 'Adaptability, efficeint time management, keep the balance',
        'umbral/upside down': 'Disorganization, financial disarray, spreading resources too thin',
    },
    'three of rings': {
        'value': 'three',
        'suit': 'rings',
        'faculty': 'possession',
        'class': 'merchants',
        'element': 'earth',
        'astral/upright': 'Teamwork, collaboration',
        'umbral/upside down': 'Inability to work with others, too narrowly focused',
    },
    'four of rings': {
        'value': 'four',
        'suit': 'rings',
        'faculty': 'possession',
        'class': 'merchants',
        'element': 'earth',
        'astral/upright': 'Control, stability, security',
        'umbral/upside down': 'Greed, materialism, a time to give more and receive less',
    },
    'five of rings': {
        'value': 'five',
        'suit': 'rings',
        'faculty': 'possession',
        'class': 'merchants',
        'element': 'earth',
        'astral/upright': 'Isolation, insecurity, lack of material wealth and wellness',
        'umbral/upside down': 'Recovery from financial loss, spiritual recovery',
    },
    'six of rings': {
        'value': 'six',
        'suit': 'rings',
        'faculty': 'possession',
        'class': 'merchants',
        'element': 'earth',
        'astral/upright': 'Viewing the greater picture, careful planning brings good outcomes',
        'umbral/upside down': 'Unwillingness to learn/adapt, lack of ambition/initiative',
    },
    'knave of rings': {
        'value': 'knave',
        'suit': 'rings',
        'faculty': 'possession',
        'class': 'merchants',
        'element': 'earth',
        'astral/upright': 'Hard work, patience, persistence',
        'umbral/upside down': 'Delays, more planning is needed, obstructions to goals',
    },
    'lord of rings': {
        'value': 'lord',
        'suit': 'rings',
        'faculty': 'possession',
        'class': 'merchants',
        'element': 'earth',
        'astral/upright': 'Disipline, abundance, control, entitled, ambitious',
        'umbral/upside down': 'Authoritative, stubborn, domineering, greedy, untrustworthy',
    },
    'lady of rings': {
        'value': 'lady',
        'suit': 'rings',
        'faculty': 'possession',
        'class': 'merchants',
        'element': 'earth',
        'astral/upright': 'Practical, maternal, hands-on approach',
        'umbral/upside down': 'Imbalance in commitments, greedy, self-serving, unsuccessful',
    },
    'the bole': {
        'value': 'arcana',
        'suit': 'rings',
        'faculty': 'possession',
        'class': 'merchants',
        'element': 'earth',
        'astral/upright': 'Abundance, blessings, protection; good fortune; the mergence of a figure that will bring good luck and good fortune',
        'umbral/upside down': 'Losing focus of the main objective; reassess the situation and look at the bigger picture; strategize to accomplish goals; the emergence of the a figure who is stressed, anxious, or stubborn and in need of help',
    },

    //KNIVES
    'ace of knives': {
        'value': 'ace',
        'suit': 'knives',
        'faculty': 'cognition',
        'class': 'military',
        'element': 'wind',
        'astral/upright': 'Mental clarity, revelation',
        'umbral/upside down': 'Confusion, chaos',
    },

    'two of knives': {
        'value': 'two',
        'suit': 'knives',
        'faculty': 'cognition',
        'class': 'military',
        'element': 'wind',
        'astral/upright': 'Indecision, stalemate, motionally blocked; biased opinions; broaden your perspective',
        'umbral/upside down': 'Information and emotional overload; act with caution and proper planning; stagnance',
    },

    'three of knives': {
        'value': 'three',
        'suit': 'knives',
        'faculty': 'cognition',
        'class': 'military',
        'element': 'wind',
        'astral/upright': 'Heartbreak, grief, rejection; pain for the purpose of growth',
        'umbral/upside down': 'Optimism, relief from pain, forgiveness; healing, reconcilliation',
    },

    'four of knives': {
        'value': 'four',
        'suit': 'knives',
        'faculty': 'cognition',
        'class': 'military',
        'element': 'wind',
        'astral/upright': 'Contemplation, passive, relaxation',
        'umbral/upside down': 'Lazy, restlessness; burnt out',
    },

    'five of knives': {
        'value': 'five',
        'suit': 'knives',
        'faculty': 'cognition',
        'class': 'military',
        'element': 'wind',
        'astral/upright': 'Loss, defeat, betrayal; discord; doubts, fears or bad habits',
        'umbral/upside down': 'Open to change; seek compromise',
    },

    'six of knives': {
        'value': 'six',
        'suit': 'knives',
        'faculty': 'cognition',
        'class': 'military',
        'element': 'wind',
        'astral/upright': 'High energy; cautious curiousity',
        'umbral/upside down': 'Dread of incoming troubles; preparedness',
    },

    'knave of knives': {
        'value': 'knave',
        'suit': 'knives',
        'faculty': 'cognition',
        'class': 'military',
        'element': 'wind',
        'astral/upright': 'Hunter, time to strike; forward momentum; green light',
        'umbral/upside down': 'Overconfidence, insensitive, egotistical',
    },

    'lord of knives': {
        'value': 'lord',
        'suit': 'knives',
        'faculty': 'cognition',
        'class': 'military',
        'element': 'wind',
        'astral/upright': 'Generosity, happiness; impersonal; calculating',
        'umbral/upside down': 'Volatility, immaturity; loss of self-control; dysfunction; sadistic',
    },

    'lady of knives': {
        'value': 'lady',
        'suit': 'knives',
        'faculty': 'cognition',
        'class': 'military',
        'element': 'wind',
        'astral/upright': 'Perceptive, independent; inquisitive',
        'umbral/upside down': 'Cold-hearted, over-emotional; haughty',
    },

    'the arrow': {
        'value': 'arcana',
        'suit': 'knives',
        'faculty': 'cognition',
        'class': 'military',
        'element': 'wind',
        'astral/upright': 'Grand new journeys await; overcoming obstacles or challenges; determination and strength in the face of adversity will lead to grand reward and satisfaction; the emergence of a figure who will assist in embarking on a grand journey, either travel or spiritual',
        'umbral/upside down': 'Struggling with control; opposing forces driving their course, left to the mercy of fate; become more disciplined and focused; possible jealous figure manipulating circumstances against the adventurer\'s favor; the emergence of a figure who is lost and in desperate need of stability and discipline',
    },

    //STAVES
    'ace of staves': {
        'value': 'ace',
        'suit': 'staves',
        'faculty': 'volition',
        'class': 'smallfolk',
        'element': 'fire',
        'astral/upright': 'New ventures; beware of impatience or becoming overwhelmed',
        'umbral/upside down': 'Delays, lack of motivation',
    },

    'two of staves': {
        'value': 'two',
        'suit': 'staves',
        'faculty': 'volition',
        'class': 'smallfolk',
        'element': 'fire',
        'astral/upright': 'Decisive choices; good time to be adventurous',
        'umbral/upside down': 'Delays due to fear of the unknown',
    },

    'three of staves': {
        'value': 'three',
        'suit': 'staves',
        'faculty': 'volition',
        'class': 'smallfolk',
        'element': 'fire',
        'astral/upright': 'Concentration and focus bring rewards; growth and expansion',
        'umbral/upside down': 'Distance and divide; long-term goals going unfulfilled or challenged',
    },

    'four of staves': {
        'value': 'four',
        'suit': 'staves',
        'faculty': 'voltion',
        'class': 'smallfolk',
        'element': 'fire',
        'astral/upright': 'Celebration, harmony, joy',
        'umbral/upside down': 'Instability, disconnection, neglect',
    },

    'five of staves': {
        'value': 'five',
        'suit': 'staves',
        'faculty': 'volition',
        'class': 'smallfolk',
        'element': 'fire',
        'astral/upright': 'Disagreement, conflict, commotion, lack of cooperation',
        'umbral/upside down': 'Diversity, cooperation, harmony',
    },

    'six of staves': {
        'value': 'six',
        'suit': 'staves',
        'faculty': 'volition',
        'class': 'smallfolk',
        'element': 'fire',
        'astral/upright': 'Freshness, energy, forward momentum; time for fun/adventures',
        'umbral/upside down': 'Indecisiveness, impatience, aimlessness',
    },

    'knave of staves': {
        'value': 'knave',
        'suit': 'staves',
        'faculty': 'volition',
        'class': 'smallfolk',
        'element': 'fire',
        'astral/upright': 'Sponteneity; take risks with caution',
        'umbral/upside down': 'Out of control, foolhardy, impulsiveness',
    },

    'lord of staves': {
        'value': 'lord',
        'suit': 'staves',
        'faculty': 'volition',
        'class': 'smallfolk',
        'element': 'fire',
        'astral/upright': 'Leadership, role model, entrepreneur',
        'umbral/upside down': 'Impulsive, hasty; lack of dependability and trust',
    },

    'lady of staves': {
        'value': 'lady',
        'suit': 'staves',
        'faculty': 'volition',
        'class': 'smallfolk',
        'element': 'fire',
        'astral/upright': 'Fearlessness, exuberance, warmth; guided by Azyma',
        'umbral/upside down': 'Aggressive, demanding, bratty; unwilling to listen',
    },

    'the balance': {
        'value': 'arcana',
        'suit': 'staves',
        'faculty': 'volition',
        'class': 'smallfolk',
        'element': 'fire',
        'astral/upright': 'Take the good with the bad; the emergence of a figure who helps increase the adventurer\'s control, organization, or aids in balancing his or her life',
        'umbral/upside down': 'Warning of caution; consider consequences of ones actions; the emergence of a strong spiritual figure or possibly a merchant who will drastically change the adventurer\'s spirituality or wealth; be open to change',
    },

    //IRONS
    'ace of irons': {
        'value': 'ace',
        'suit': 'irons',
        'faculty': 'contrition',
        'class': 'prisoners',
        'element': 'ice',
        'astral/upright': 'Love, sexuality',
        'umbral/upside down': 'Pent up lust, cold hatred',
    },

    'two of irons': {
        'value': 'two',
        'suit': 'irons',
        'faculty': 'contrition',
        'class': 'prisoners',
        'element': 'ice',
        'astral/upright': 'Partnership, attraction, relationships',
        'umbral/upside down': 'Break-up. lack of harmony',
    },

    'three of irons': {
        'value': 'three',
        'suit': 'irons',
        'faculty': 'contrition',
        'class': 'prisoners',
        'element': 'ice',
        'astral/upright': 'Fantasy, illusion, imagination',
        'umbral/upside down': 'Temptation, appearance versus reality',
    },

    'four of irons': {
        'value': 'four',
        'suit': 'irons',
        'faculty': 'contrition',
        'class': 'prisoners',
        'element': 'ice',
        'astral/upright': 'Escapism, abandonment, withdrawal',
        'umbral/upside down': 'Hopelessness, drifting spirits',
    },

    'five of irons': {
        'value': 'five',
        'suit': 'irons',
        'faculty': 'contrition',
        'class': 'prisoners',
        'element': 'ice',
        'astral/upright': 'Strength, faith, courage',
        'umbral/upside down': 'Weakness, agnostic, despair',
    },

    'six of irons': {
        'value': 'six',
        'suit': 'irons',
        'faculty': 'contrition',
        'class': 'prisoners',
        'element': 'ice',
        'astral/upright': 'Transgressions put behind you; pain is still evident; go with the flow to a more positive outcome',
        'umbral/upside down': 'Trapped; reflect upon what brought about current circumstances',
    },

    'knave of irons': {
        'value': 'knave',
        'suit': 'irons',
        'faculty': 'contrition',
        'class': 'prisoners',
        'element': 'ice',
        'astral/upright': 'Depression, fear, anxiety; overwhelmed; mental exhaustion; light at the end of a long tunnel',
        'umbral/upside down': 'The only way out is through; bear the emotions; quell inner doubts',
    },

    'lord of irons': {
        'value': 'lord',
        'suit': 'irons',
        'faculty': 'contrition',
        'class': 'prisoners',
        'element': 'ice',
        'astral/upright': 'Romantic, suave, intrepid',
        'umbral/upside down': 'Unfaithful, unsophisticated, rude',
    },

    'lady of irons': {
        'value': 'lady',
        'suit': 'irons',
        'faculty': 'contrition',
        'class': 'prisoners',
        'element': 'ice',
        'astral/upright': 'Charming, compassionate, merciful',
        'umbral/upside down': 'Unrealistic, jealous',
    },

    'the spear': {
        'value': 'ace',
        'suit': 'irons',
        'faculty': 'contrition',
        'class': 'prisoners',
        'element': 'ice',
        'astral/upright': 'Strength, confidence, trust, love; working in harmony; confide or trust in others; strong sexual or physical attraction that goes beyond instant gratification and lust; a strong sense of faith; making choices that shake morality or challenge values',
        'umbral/upside down': 'Tremendous rifts between the adventurer and someone important in their life; weakness and obstinancy; seek out inner strength and tap into one\'s compassion and mercy; come to terms with negative emotions to conquer them and move on to happier times; the end of a relationship, or one-sided feelings leading to disappointment and insecurity',
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:card', (request, response)=> {
    const card = request.params.card.toLowerCase()
    if(rappers[rappersName]) {
        response.json(card)
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})