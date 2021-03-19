// UI comp
const startBtn = document.createElement("button");
startBtn.innerHTML = "Start listening";
const result = document.createElement("div");
const processing = document.createElement("p");
document.write("<body><h1></h1></body>");
document.body.append(startBtn);
document.body.append(result);
document.body.append(processing);


// speech to text
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let toggleBtn = null;
if (typeof SpeechRecognition === "undefined") {
	startBtn.remove();
	result.innerHTML = "<b>Browser does not support Speech API. Please download latest chrome.<b>";
} else {
	const recognition = new SpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;
	recognition.onresult = event => {
		const last = event.results.length - 1;
		const res = event.results[last];
		const text = res[0].transcript;
		if (res.isFinal) {
			processing.innerHTML = "processing ....";

			const response = process(text);
			const p = document.createElement("p");
			p.innerHTML = `You said: ${text} </br>Jarvis said: ${response}`;
			processing.innerHTML = "";
			result.appendChild(p);

			// text to speech
			speechSynthesis.speak(new SpeechSynthesisUtterance(response));
		} else {
			processing.innerHTML = `listening: ${text}`;
		}
	}
	let listening = false;
	toggleBtn = () => {
		if (listening) {
			recognition.stop();
			startBtn.textContent = "Start listening";
		} else {
			recognition.start();
			startBtn.textContent = "Stop listening";
		}
		listening = !listening;
	};
	startBtn.addEventListener("click", toggleBtn);

}

// processor
function process(rawText) {
	let text = rawText.replace(/\s/g, "");
	text = text.toLowerCase();
	let response = null;
	
if (rawText.includes("hello")) {
    response = "hello sir"
}

if (rawText.includes("stop")) {
    response = "Goodbye Sir."
    toggleBtn();
}
    
if (rawText.includes("your name")) {
    response = "My name is Jarvis."
}
if (rawText.includes("you're stupid")) {
    console.log("your stupid");
    response = "I am not capable of being stupid, because I am an AI."
}

if (rawText.includes("my name")) {
    console.log("Your name is Becket Spencer.");
     response = "Your name is Becket Spencer."

}

if (rawText.includes("my birthday")) {
    console.log("Your brithday is March 25th, 2005.");

    response = "Your brithday is March 25th, 2005."

    
}

if (rawText.includes("a girlfriend")) {
    console.log("I do have a girlfriend, but I am not telling you her name.");

    
    response = "I do have a girlfriend, but I am not telling you her name."

    
}

if (rawText.includes("why not")) {
    console.log("Because I said so.");

    
    response = "because I said so."

    
}

if (rawText.includes("Jarvis hello")) {
    console.log("Hello.");

    
    response = "Hello."

    
} 

if (rawText.includes("can you hear me" || "are you there")) {
    console.log("Im here");

    
    response = "Im here"

    
}

if (rawText.includes("how are you")) {
    console.log("Im good.");

    
    response = "Im good"

   
}

if (rawText.includes("what time is it")) {
   

    
    response = new Date().toLocaleTimeString();

    
}

if (rawText.includes("what's up")) {
    console.log("At the moment, not much");

    
    response = "At the moment, not much"

    
}

if (rawText.includes("when were you made")) {
    console.log("I was created on March 10th, 2021");

    
    response = "I was created on March 10th, 2021."

    
}

if (rawText.includes("who are you")) {
    console.log("Im Jarvis");

    
    response = "Im Jarvis"

   
}

if (rawText.includes("what are you")) {
    console.log("I am an artificially intellegent being named Jarvis.");

    
    response = "I am an artificially intellegent being named Jarvis."

    
}

if (rawText.includes("where were you born")) {
    console.log("Im not capable of being born, as I am only software");

    
    response = "Im not capable of being born, as I am only software"

    
}

if (rawText.includes("who made you")) {
    console.log("Becket Spencer created me");

    
    response = "Becket Spencer created me"

    
}

if (rawText.includes("inches are in a meter")) {
    console.log("There are 39.3701 inches in 1 meter.");

    
    response = "There are 39.3701 inches in 1 meter."

    
}

if (rawText.includes("old am I")) {
    console.log("You are 15 years old.");

    
    response = "You are 15 years old."

   
}

if (rawText.includes("inches are in a kilometer")) {
    console.log("There are 39370.1 inches in a kilometer.");

    
    response = "There are 39370.1 inches in a kilometer."

    
}

if (rawText.includes("inches are in a centimeter")) {
    console.log("There are 0.393701 inches in a centimeter.");

    
    response = "There are 0.393701 inches in a centimeter."

    
}

if (rawText.includes("inches are in a millimeter")) {
    

    
    response = "There are 0.0393701 inches in a millimeter."

    
}

if (rawText.includes("inches are in a mile")) {
    

    
    response = "There are 63360 inches in a mile."

    
}

if (rawText.includes("inches are in a yard")) {
    

    
    response = "There are 36 inches in a yard."

    
}

if (rawText.includes("inches are in a foot")) {
   

    
    response = "There are 12 inches in a foot."

    
}

if (rawText.includes("feet are in a nautical mile")) {
    console.log("A nautical mile is 6076.12 feet");

    
    response = "A nautical mile is 6076.12 feet"

    
}

if (rawText.includes("feet are in a yard")) {
    

    
    response = "There are 3 feet in a yard"

   
}

if (rawText.includes("thank you")) {
    

    
    response = "No problem sir; if you need me again, let me know."

   
}

if (rawText.includes("where do I attend school")) {

    
    response = "You attend school at Manchester Essex High School."

    
}

if (rawText.includes("what's the time")) {
    

    response = new Date().toLocaleTimeString();

    
}

if (rawText.includes("where do I go to school")) {

    
    response = "You attend school at Manchester Essex High School."

    
}

if (rawText.includes("many ounces in a gallon")) {

    
    response = "There are 128 US fluid ounces in a gallon"

   
}

if (rawText.includes("do you say hi in Spanish")) {

    
    response = "hola"

    
}

if (rawText.includes("do you say to open in Spanish")) {

    
    response = "abrir"

    
}

if (rawText.includes("do you say to finish in Spanish")) {

    
    response = "acabar"

    
}

if (rawText.includes("do you say to accept in Spanish")) {

    
    response = "aceptar"

    
}

if (rawText.includes("do you say to reach in Spanish")) {

    
    response = "alcanzar"

   
}

if (rawText.includes("do you say to appear in Spanish")) {

    
    response = "aparecer"

    
}

if (rawText.includes("do you say to help in Spanish")) {

    
    response = "ayudar"

   
}

if (rawText.includes("do you say to look for in Spanish")) {

    
    response = "buscar"

    
}

if (rawText.includes("do you say to fall in Spanish")) {

    
    response = "caer"

    
}

if (rawText.includes("do you say to change in Spanish")) {

    
    response = "cambiar"

   
}

if (rawText.includes("do you say to begin in Spanish")) {

    
    response = "comenzar, but empezar is also to start/to begin."

    
}

if (rawText.includes("do you say to understand in Spanish")) {

    
    response = "comprender"

    
}

if (rawText.includes("do you say to know in Spanish")) {

    
    response = "conocer"

    
}

if (rawText.includes("do you say to meet in Spanish")) {

    
    response = "conocer(means to know/meet)"

    
}

if (rawText.includes("do you say to get in Spanish")) {

    
    response = "conseguir"

    
}

if (rawText.includes("do you say to consider in Spanish")) {

    
    response = "considerar"

    
}

if (rawText.includes("do you say to count in Spanish")) {

    
    response = "contar"

    
}

if (rawText.includes("do you say to convert in Spanish")) {

   
    response = "convertir(means to convert/change"

    
}

if (rawText.includes("do you say to change in Spanish")) {

    
    response = "convertir(means to convert/change"

    
}

if (rawText.includes("do you say to run in Spanish")) {

    
    response = "correr"

    
}

if (rawText.includes("do you say to create in Spanish")) {

    
    response = "crear"

    
}

if (rawText.includes("do you say to believe in Spanish")) {

    
    response = "creer"

    
}

if (rawText.includes("do you say to achieve in Spanish")) {

    
    response = "cumplir"

    
}

if (rawText.includes("do you say to give in Spanish")) {

    
    response = "dar"

    
}

if (rawText.includes("do you say to owe in Spanish")) {

    
    response = "deber"

    
}

if (rawText.includes("do you say to say in Spanish")) {

    
    response = "decir"

    
}

if (rawText.includes("do you say to leave in Spanish")) {

    
    response = "dejar(means to leave/allow)"

    
}

if (rawText.includes("do you say to allow in Spanish")) {

    
    response = "dejar(means to leave/allow)"

    
}

if (rawText.includes("do you say to discover in Spanish")) {

    
    response = "descubrir"

    
}

if (rawText.includes("do you say to direct in Spanish")) {

    
    response = "dirigir"

    
}

if (rawText.includes("do you say to find in Spanish")) {

    
    response = "encontrar"

    
}

if (rawText.includes("do you say to understand in Spanish")) {

    
    response = "entender or comprender"

    
}

if (rawText.includes("do you say to enter in Spanish")) {

    
    response = "entrar"

    
}

if (rawText.includes("do you say to write in Spanish")) {

    
    response = "escribir"

    
}

if (rawText.includes("do you say to listen in Spanish")) {

    
    response = "escuchar"

    
}

if (rawText.includes("do you say to wait in Spanish")) {

    
    response = "esperar(means to wait/hope)"

    
}

if (rawText.includes("do you say to hope in Spanish")) {

    
    response = "esperar(means to wait/hope)"

    
}

if (rawText.includes("do you say to be in Spanish")) {

    
    response = "estar or ser"

    
}

if (rawText.includes("do you say to study in Spanish")) {

    
    response = "estudiar"

    
}

if (rawText.includes("do you say to exist in Spanish")) {

    
    response = "existir"

   
}

if (rawText.includes("do you say to explain in Spanish")) {

    
    response = "explicar"

    
}

if (rawText.includes("do you say to form in Spanish")) {

   
    response = "formar(means to form/make)"

    
}

if (rawText.includes("do you say to make in Spanish")) {

    
    response = "Formar(means to form/make) or hacer(hacer is more common)"

    
}

if (rawText.includes("do you say to earn in Spanish")) {

    
    response = "ganar(means to earn/win)"

    
}

if (rawText.includes("do you say to win in Spanish")) {

    
    response = "ganar(means to earn/win"

    
}

if (rawText.includes("do you say to like in Spanish")) {

    
    response = "gustar"

    
}

if (rawText.includes("do you say to have in Spanish")) {

    
    response = "haber or tener"

    
}

if (rawText.includes("do you say to speak in Spanish")) {

    
    response = "hablar(means to speak/talk)"

    
}

if (rawText.includes("do you say to talk in Spanish")) {

    
    response = "hablar(means to speak/talk)"

    
}

if (rawText.includes("do you say to do in Spanish")) {

    
    response = "hacer"

    
}

if (rawText.includes("do you say to try in Spanish")) {

    
    response = "intentar"

    
}

if (rawText.includes("do you say to go in Spanish")) {

    
    response = "ir"

    
}

if (rawText.includes("do you say to play in Spanish")) {

    
    response = "jugar"

    
}

if (rawText.includes("do you say to read in Spanish")) {

    
    response = "leer"

    
}

if (rawText.includes("do you say to get up in Spanish")) {

    
    response = "levantar"

    
}

if (rawText.includes("do you say to call in Spanish")) {

    
    response = "llamar"

    
}

if (rawText.includes("do you say to arrive in Spanish")) {

    
    response = "llegar"

    
}

if (rawText.includes("do you say to carry in Spanish")) {

    
    response = "llevar"

    
}

if (rawText.includes("do you say to achieve in Spanish")) {

    
    response = "lograr(means to achieve/manage to)"

    
}

if (rawText.includes("do you say to manage to in Spanish")) {

    
    response = "lograr(means to achieve/manage to)"

    
}

if (rawText.includes("do you say to maintain in Spanish")) {

    
    response = "mantener(means to maintain/keep)"

    
}

if (rawText.includes("do you say to keep in Spanish")) {

    
    response = "mantener(means to maintain/keep)"

   
}

if (rawText.includes("do you say to watch in Spanish")) {

    
    response = "mirar(means to watch/look at)"

    
}

if (rawText.includes("do you say to look at in Spanish")) {

    
    response = "mirar"

    
}

if (rawText.includes("do you say to die in Spanish")) {

    
    response = "morir"

    
}

if (rawText.includes("do you say to be born in Spanish")) {
    
    
    response = "nacer"

    
}

if (rawText.includes("do you say to need in Spanish")) {

    
    response = "necesitar"

    
}

if (rawText.includes("do you say to occur in Spanish")) {

    
    response = "ocurrir(means to occur/happen)"

    
}

if (rawText.includes("do you say to happen in Spanish")) {

    
    response = "ocurrir(means to occur/happen)"

    
}

if (rawText.includes("do you say to offer in Spanish")) {
    
    
    response = "ofrecer"

    
}

if (rawText.includes("do you say to hear in Spanish")) {

    
    response = "oir(The i has an accent mark)"

    
}

if (rawText.includes("do you say to pay in Spanish")) {

    
    response = "pagar"

    
}

if (rawText.includes("do you say to stop in Spanish")) {

    
    response = "parar"

    
}

if (rawText.includes("do you say to seem in Spanish")) {

    
    response = "parecer"

    
}

if (rawText.includes("do you say to leave in Spanish")) {

    
    response = "partir or salir(salir means to leave/go out)"

    
}

if (rawText.includes("do you say to happen in Spanish")) {

    
    response = "pasar(means to happen/pass)"

    
}

if (rawText.includes("do you say to pass in Spanish")) {

    
    response = "pasar(means to happen/pass)"

    
}

if (rawText.includes("do you say to ask for in Spanish")) {

    
    response = "pedir"

    
}

if (rawText.includes("do you say to order in Spanish")) {

    
    response = "pedir"

    
}

if (rawText.includes("do you say to lose in Spanish")) {

    
    response = "perder"

    
}

if (rawText.includes("do you say to permit in Spanish")) {

    
    response = "permitir"

    
}

if (rawText.includes("do you say to allow in Spanish")) {

    
    response = "permitir"

    
}

if (rawText.includes("do you say to be able to in Spanish")) {

    
    response = "poder"

    
}

if (rawText.includes("do you say to put in Spanish")) {

    
    response = "poner"

    
}

if (rawText.includes("do you say to ask in Spanish")) {

    
    response = "preguntar"

    
}

if (rawText.includes("do you say to introduce in Spanish")) {

    
    response = "presentar(means to introduce/present)"

    
}

if (rawText.includes("do you say to present in Spanish")) {

    
    response = "presentar(means to introduce/present)"

    
}

if (rawText.includes("do you say to produce in Spanish")) {

    
    response = "producir"

   
}

if (rawText.includes("do you say to stay in Spanish")) {

    
    response = "quedar"

    
}

if (rawText.includes("do you say to want in Spanish")) {

    
    response = "querer"

   
}

if (rawText.includes("do you say to achieve in Spanish")) {

    
    response = "realizar or cumplir"

   
}

if (rawText.includes("do you say to receive in Spanish")) {

    
    response = "recibir"

    
}

if (rawText.includes("do you say to recognize in Spanish")) {

    
    response = "reconocer"

    
}

if (rawText.includes("do you say to remember in Spanish")) {

    
    response = "recordar"

    
}

if (rawText.includes("do you say to turn out in Spanish")) {

    
    response = "resultar"

    
}

if (rawText.includes("do you say to know in Spanish")) {

    
    response = "saber(facts or info) or conocer(persons)"

    
}

if (rawText.includes("do you say to take out in Spanish")) {

    
    response = "sacar"

    
}

if (rawText.includes("do you say to go out in Spanish")) {

    
    response = "salir"

   
}

if (rawText.includes("do you say to follow in Spanish")) {

    
    response = "seguir"

  
}

if (rawText.includes("do you say to feel in Spanish")) {

    
    response = "sentir"

    
}

if (rawText.includes("do you say to serve in Spanish")) {

    
    response = "servir"

    
}

if (rawText.includes("do you say to suppose in Spanish")) {

    
    response = "suponer"

    
}

if (rawText.includes("do you say to finish in Spanish")) {

    
    response = "terminar"

    
}

if (rawText.includes("do you say to play in Spanish")) {

    
    response = "tocar"

    
}

if (rawText.includes("do you say to take in Spanish")) {

    
    response = "tomar"

    
}

if (rawText.includes("do you say to work in Spanish")) {

   
    response = "trabajar"

    
}

if (rawText.includes("do you say to bring in Spanish")) {

    
    response = "traer"

    
}

if (rawText.includes("do you say to treat in Spanish")) {

    
    response = "tratar"

    
}

if (rawText.includes("do you say to use in Spanish")) {

    
    response = "utilizar"

    
}

if (rawText.includes("do you say to come in Spanish")) {

    
    response = "venir"

   
}

if (rawText.includes("do you say to see in Spanish")) {

    
    response = "ver"

    
}

if (rawText.includes("do you say to live in Spanish")) {

    
    response = "vivir"

    
}

if (rawText.includes("do you say to return in Spanish")) {

    
    response = "volver"

    
}

if (rawText.includes("do you say to rob in Spanish")) {

    
    response = "robar"

    
}

if (rawText.includes("do you say to escape in Spanish")) {

    
    response = "escaparse de"

   
}

if (rawText.includes("do you say that in Spanish")) {

   
    response = "que"

    
}

if (rawText.includes("do you say of in Spanish")) {

   
    response = "de"

   
}

if (rawText.includes("do you say from in Spanish")) {

   
    response = "de"

    
}

if (rawText.includes("do you say no in Spanish")) {

   
    response = "no"

   
}

if (rawText.includes("do you say to in Spanish")) {

    
    response = "a"

    
}

if (rawText.includes("do you say the in Spanish")) {

    
    response = "use el for singular masculine nouns and use la for singular feminine nouns."

    
}

if (rawText.includes("do you say he is in Spanish")) {

    
    response = "es(which means he is, she is, it is; for essential characteristics) or esta(means he is, she is, it is; for conditions or emotions. esta has an accent mark on the a)."

    
}

if (rawText.includes("do you say and in Spanish")) {

    
    response = "y"

   
}

if (rawText.includes("do you say in in Spanish")) {

    
    response = "en"

    
}

if (rawText.includes("do you say on in Spanish")) {

    
    response = "en"

    
}

if (rawText.includes("do you say at in Spanish")) {

    
    response = "en"

    
}

if (rawText.includes("do you say a in Spanish")) {

    
    response = "un(for singular masculine nouns) or una(for singular feminine nouns)."

    
}

if (rawText.includes("do you say an in Spanish")) {

    
    response = "un(for singular masculine nouns) or una(for singular feminine nouns)."

    
}

if (rawText.includes("do you say for in Spanish")) {

    
    response = "por(if talking about time) or para(if not talking about time)"

    
}

if (rawText.includes("do you say by in Spanish")) {

    
    response = "por"

   
}

if (rawText.includes("do you say through in Spanish")) {

    
    
    response = "por"

    
}

if (rawText.includes("do you say what in Spanish")) {
    response = "que. (que has an accent mark on the e)"

    
}

if (rawText.includes("do you say how in Spanish")) {

    
    response = "que. (que has an accent mark on the e)."

    
}

if (rawText.includes("do you say me in Spanish")) {

    
    response = "me"

    
}

if (rawText.includes("do you say myself in Spanish")) {

    
    response = "me"

    
}

if (rawText.includes("do you say with in Spanish")) {

    
    response = "con"

    
}

if (rawText.includes("do you say my in Spanish")) {

    
    response = "para"

    
}

if (rawText.includes("do you say if in Spanish")) {

    
    response = "si"

    
}

if (rawText.includes("do you say well in Spanish")) {

    
    response = "bien"

    
}

if (rawText.includes("do you say good in Spanish")) {

    
    response = "en"

    
}

if (rawText.includes("do you say but in Spanish")) {

    
    response = "pero"

   
}

if (rawText.includes("do you say I in Spanish")) {

    
    response = "yo"

    
}

if (rawText.includes("do you say that in Spanish")) {

    
    response = "eso"

    
}

if (rawText.includes("do you say yes in Spanish")) {

    
    response = "si. (si has an accent mark on the i)."

   
}

if (rawText.includes("do you say his in Spanish")) {

    
    response = "su. (su means his, hers, or its)."

    
}

if (rawText.includes("do you say hers in Spanish")) {

    
    response = "su. (su means his, hers, or its)."

    
}

if (rawText.includes("do you say its in Spanish")) {

    
    response = "su. (su means his, hers, or its)."

    
}

if (rawText.includes("do you say your here Spanish")) {

    
    response = "aqui. (aqui has an accent mark on the i)."

    
}

if (rawText.includes("do you say of the in Spanish")) {

    
    response = "del. (del means of the, from the, or in the)."

    
}

if (rawText.includes("do you say from the in Spanish")) {

    
    response = "del. (del means of the, from the, or in the)."

    

if (rawText.includes("do you say in the in Spanish")) {

    
    response = "del. (del means of the, from the, or in the)."

    
}

if (rawText.includes("do you say to the in Spanish")) {

    
    response = "al"

    
}

if (rawText.includes("do you say more in Spanish")) {

    
    response = "mas. (mas has an accent mark over the a)"

    
}

if (rawText.includes("do you say already in Spanish")) {

    
    response = "ya"

    
}

if (rawText.includes("do you say everything in Spanish")) {

    
    response = "todo"

    
}

if (rawText.includes("do you say let's go in Spanish")) {

    
    response = "vamos. (vamos menas let's go or come on)."

    
}

if (rawText.includes("do you say come on in Spanish")) {

    
    response = "vamos. (vamos means let's go or come on"

    
}

if (rawText.includes("do you say very in Spanish")) {

    
    response = "muy"

    
}

if (rawText.includes("do you say there is in Spanish")) {

    
    response = "hay"

    
}

if (rawText.includes("do you say there are in Spanish")) {

    
    response = "hay"

    
}

if (rawText.includes("do you say now in Spanish")) {

    
    response = "ahora"

    
}

if (rawText.includes("do you say I am in Spanish")) {

    
    response = "soy(for essential characteristics) or estory(for non-permanent characteristics)"

    
}

if (rawText.includes("do you say I have in Spanish")) {

    
    response = "tengo"

    
}

if (rawText.includes("do you say us in Spanish")) {

    
    response = "nos"

    
}

if (rawText.includes("do you say you in Spanish")) {

    
    response = "tu. (tu has an accent mark on the u)."

    
}

if (rawText.includes("do you say nothing in Spanish")) {

    
    response = "nada"

    
}

if (rawText.includes("do you say when in Spanish")) {

    
    response = "cuando"

    
}

if (rawText.includes("do you say I know in Spanish")) {

    
    response = "se. (se has an accent mark on the e)."

    
}

if (rawText.includes("do you say you are in Spanish")) {

    
    response = "estas (which has an accent mark on the a and is for non-permanent characteristics) or es (which is for essential characteristics)."

    
}

if (rawText.includes("do you say like this in Spanish")) {

    
    response = "asi. (asi has an accent mark on the i)."

    
}

if (rawText.includes("do you say I can in Spanish")) {

    
    response = "puedo"

    
}

if (rawText.includes("do you say how in Spanish")) {

    
    response = "como. (como has an accent mark on the first o)."

    
}

if (rawText.includes("do you say I want in Spanish")) {

    
    response = "quiero"

    
}

if (rawText.includes("do you say only in Spanish")) {

    
    response = "solo. (solo has an accent mark on the first o)."

    
}

if (rawText.includes("do you say he has in Spanish")) {

    
    response = "tiene"

    
}

if (rawText.includes("do you say she has in Spanish")) {

    
    response = "tiene"

    
}

if (rawText.includes("do you say it has in Spanish")) {

    
    response = "tiene"

    
}

if (rawText.includes("do you say thank you in Spanish")) {

    
    response = "gracias"

    
}

if (rawText.includes("do you say or in Spanish")) {

    
    response = "o"

    
}

if (rawText.includes("do you say good in Spanish")) {

    
    response = "bueno"

    
}

if (rawText.includes("do you say he was in Spanish")) {

    
    response = "fue"

    
}

if (rawText.includes("do you say she was in Spanish")) {

    
    response = "fue"

    
}

if (rawText.includes("do you say it was in Spanish")) {

    
    response = "fue"

    
}

if (rawText.includes("do you say to do in Spanish")) {

    
    response = "hacer"

    
}

if (rawText.includes("do you say to make in Spanish")) {

    
    response = "hacer"

    
}

if (rawText.includes("do you say they are in Spanish")) {

    
    response = "son (for essential characteristics) and estan (for non-permenant characteristics. Estan has an accent mark on the e)."

    
}

if (rawText.includes("do you say all of us in Spanish")) {

    
    response = "todos"

    
}

if (rawText.includes("do you say all of them in Spanish")) {

    
    response = "todos"

    
}

if (rawText.includes("do you say I believe in Spanish")) {

    
    response = "creo"

    
}

if (rawText.includes("do you say she in Spanish")) {

    
    response = "ella"

    
}

if (rawText.includes("do you say that one in Spanish")) {

    
    response = "ese"

    
}

if (rawText.includes("do you say I go in Spanish")) {

    
    response = "voy"

    
}

if (rawText.includes("do you say he can in Spanish")) {

    
    response = "puede"

    
}

if (rawText.includes("do you say she can in Spanish")) {

    
    response = "puede"

    
}

if (rawText.includes("do you say it can in Spanish")) {

    
    response = "puede"

    
}

if (rawText.includes("do you say you know in Spanish")) {

    
    response = "sabes (if talking about facts or information) or conoces(if talking about a person)."

    
}

if (rawText.includes("do you say because in Spanish")) {

    
    response = "porque"

    
}

if (rawText.includes("do you say God in Spanish")) {

    
    response = "Dios"


}

if (rawText.includes("do you say who in Spanish")) {

    
    response = "quien. (quien has an accent mark on the e)."

    
}

if (rawText.includes("do you say never in Spanish")) {

    
    response = "nunca"

    
}

if (rawText.includes("do you where in in Spanish")) {

    
    response = "donde. (donde has an accent mark on the o)."

    
}

if (rawText.includes("do you say you want in Spanish")) {

    
    response = "quieres"

    
}

if (rawText.includes("do you say favor in Spanish")) {

    
    response = "favor"

    
}

if (rawText.includes("do you say two in Spanish")) {

    
    response = "dos"

    
}

if (rawText.includes("do you say so in Spanish")) {

    
    response = "tan"

    
}

if (rawText.includes("do you say mister in Spanish")) {

    
    response = "senor. (senor has a squiggly accent mark over the n)."

    
}

if (rawText.includes("do you say so in Spanish")) {

    
    response = "tan"

    
}

if (rawText.includes("do you say time in Spanish")) {

    
    response = "tiempo"

    
}

if (rawText.includes("do you say truth in Spanish")) {

    
    response = "verdad"

    
}

if (rawText.includes("do you say kind in Spanish")) {

    
    response = "amable"

    
}

if (rawText.includes("do you say loving in Spanish")) {

    
    response = "carinoso. carinoso has a squiggly accent mark over the n."

    
}

if (rawText.includes("do you say jealous in Spanish")) {

    
    response = "celoso"

    
}

if (rawText.includes("do you say gossipy in Spanish")) {

    
    response = "chismoso"

    
}

if (rawText.includes("do you say considerate in Spanish")) {

    
    response = "considerado"

    
}

if (rawText.includes("do you say selfish in Spanish")) {

    
    response = "egoista. egoista has an accent mark on the i."

    
}

if (rawText.includes("do you say meddlesome in Spanish")) {

    
    response = "entrometido"

    
}

if (rawText.includes("do you say honest in Spanish")) {

    
    response = "honesto"

    
}

if (rawText.includes("do you say intimate in Spanish")) {

    
    response = "intimo. intimo has an accent mark over the i."

    
}

if (rawText.includes("hi there")) {

    
    response = "What's up!"

    
}

if (rawText.includes("H")) {

    
    response = "What's up!"

    
}

if (rawText.includes("brought peace freedom justice and security to my new Empire")) {

    
    response = "Your new empire?"

    
}

if (rawText.includes("hey")) {

    
    response = "What's up!"

    
}

if (rawText.includes("make me kill you")) {

    
    response = "Anikan, my allegiance is to the Republic, to Democracy!"

    
}

if (rawText.includes("if you are not with me then you are my enemy")) {

    
    response = "Only a Sith deals in absolutes. I will do what I must."

   
}

if (rawText.includes("your purpose")) {

   
    response = "I was made to help and serve my creator, Becket Spencer."

    
}

if (rawText.includes("I am your father")) {

   
    response = "Nooooooooooooooooooooooooooooooooooooooooooooooo!"

    
}
}

    

	if (!response) {
		window.open(`http://google.com/search?q=${rawText.replace("search", "")}`, "_blank");
		return `I found some information for ${rawText}`;
	}

	return response;
}

