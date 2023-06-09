
const play = document.querySelector(".play")
const mainGame = document.querySelector(".main > .game")
const main = document.querySelector(".main")
const dom_question = document.getElementById("questions-h2")
const answer1 = document.getElementById("first")
const answer2 = document.getElementById("two")
const answer3 = document.getElementById("thirth")
const answer4 = document.getElementById("forth")
const fifty_fifty = document.querySelector(".fifty_fifty")


mainGame.addEventListener('click', () => {
    main.style.display = "none"
    play.style.display = ""
})

class Question {
    constructor(_question, _answer1, _answer2, _answer3, _answer4, _rigth_answer) {
        this.question = _question
        this.answer1 = _answer1
        this.answer2 = _answer2
        this.answer3 = _answer3
        this.answer4 = _answer4
        this.rigth_answer = _rigth_answer
    }

}



class Milion {
    questions = [];
    question_index = 0


    add(_question, _answer1, _answer2, _answer3, _answer4, _rigth_answer) {
        const milyonater = new Question(_question, _answer1, _answer2, _answer3, _answer4, _rigth_answer)
        this.questions.push(milyonater);
    }

    askQuestion() {
        const currect_index = this.questions[this.question_index]
        dom_question.innerText = currect_index.question
        answer1.innerText = currect_index.answer1
        answer2.innerText = currect_index.answer2
        answer3.innerText = currect_index.answer3
        answer4.innerText = currect_index.answer4
    }
    check() {
        let arr = [answer1, answer2, answer3, answer4]
        arr.map((item) => {
            item.addEventListener('click', () => {

                const currect_index = this.questions[this.question_index]
                const rigth_answer = currect_index.rigth_answer
                item.style.background = "rgb(218, 218, 16)"
                if (item.innerText === rigth_answer) {
                    setTimeout(() => {
                        item.style.background = "green"

                    }, 1000)
                    setTimeout(() => {
                        item.style.background = ""
                        this.question_index++
                        this.askQuestion()
                    }, 3000)
                } else {
                    setTimeout(() => {
                        item.style.background = "red"
                        location.reload()
                    }, 1000)
                }
            })
        })
    }

    fifty() {

       

      fifty_fifty.addEventListener('click', ()=>{
        fifty_fifty.innerHTML = ''
        let currentQuestion = game[currentQuestionIndex];
        let rightAnswer = currentQuestion.currentAnswer
        const variants = [answer1, answer2, answer3, answer4]
        for (let i = 0; i < variants.length; i++) {
            while (true){
                if(variants[x].innerText !== rightAnswer && variants[y].innerText !== rightAnswer){
                    if(x !== y){
                        variants[x].disabled = true
                        variants[y].disabled = true
                        fifty_fifty.innerHTML = ''
                        setTimeout(()=>{variants[x].disabled = false; variants[y].disabled = false},4000)
                        console.log(variants[x].innerText, variants[y].innerText)
                    }
                }else{
                    x = Math.floor(Math.random() * 3)
                    y = Math.floor(Math.random() * 3)
                }
                break
            }
        }
    })




    }
    
    startGame() {

        this.askQuestion()
        this.check()
        this.fifty()

    }

}

const milyon = new Milion();

milyon.add("Ո՞ր կրոնական փիլիսոփայության ուղղություններից է Դզեն ուսմունքը.", "Բուդիզմ", "Հինդուիզմ", "Դաոսիզմ", "Հուդաիզմ", "Բուդիզմ"),
    milyon.add("1932թ. ո՞ր քաղաքում է առաջին անգամ անցկացվել առաջին միջազգային կինոփառատոնը.", "Մոսկվա", "Վենետիկ", "Կանն", "Բեռլին", "Վենետիկ"),
    milyon.add("Ո՞վ է առաջինը Նոբելյան մրցանակ ստացել գրականության ասպարեզում.", "Վիպասան", "Էսսեիստ", "Պոետ", "Դրամատուրգ", "Պոետ"),
    milyon.add("Ռուսաստանի քարտեզի վրա ինչպիսի՞ անվանումով գետ գոյություն չունի.", "Մատ (Палец)", "Մեջք (Спина)", "Պարանոց (Шея)", "Բերան (Уста)", "Մեջք (Спина)"),
    milyon.add("Քանի՞ ծով է ողողում Բալկանյան թերակղզին", "4", "3", "8", "6", "6",),
    milyon.add("Հին Հունաստանի բնակչուհին Օլիմպիական խաղերի ո՞ր կարգում կարող էր հաղթել.", "Լող", "Ըմբշամարտ", "Կառքերի մրցավազք", "Վազք", "Կառքերի մրցավազք"),
    milyon.add("Բացի թվային ինդեքսից, ինչպիսի՞ անվանում ունի Android օպերացիոն համակարգի յուրաքանչյուր տարբերակը.", "«Գարնանային»", "«Հնդկացիական»", "«Ծովային»", "«Քաղցր»", "«Քաղցր»"),
    milyon.add("Ինչպե՞ս են կոչվում իշամեղուները, որոնք բույն չեն կառուցում և նեկտար չեն հավաքում.", "Կկու իշամեղուներ", "Մակաբույծ իշամեղուներ", "Ծույլ իշամեղուներ", "Բզզան իշամեղուներ", "Կկու իշամեղուներ"),
    milyon.add("Ինչպե՞ս է կոչվում քամու արագությունը չափող օդերևութաբանական սարքը․", "Բարոմետր", "Պիկտոմետր", "Պիրոմետր", "Անեմոմետր", "Անեմոմետր"),
    milyon.add("Նշված վայրերից որտե՞ղ է ամբողջ տարվա ընթացքում օրվա և գիշերվա տևողությունը հավասար․", "Հարավային բևեռ", "Հասարակած", "Հյուսիսային բևեռ", "Զրոյական միջօրեական", "Հասարակած")
milyon.add("Նախքան ավտոմեքենաներ արտադրելը Ֆերուչո Լամբորգինիի գործարանը արտադրում էր․", "Գնացքներ", "Հեծանիվ", "Տրակտորներ", "Կարի մեքենաներ", "Տրակտորներ")
milyon.add("Մարդու օրգանիզմի ո՞ր գեղձն է ադրենալին արտադրում․", "Մակերիկամ", "Էպիֆիզ", "Շագանակագեղձ", "Հիպոֆիզ", "Մակերիկամ")
milyon.add("Եվրոպայի ո՞ր պետությունն է Մեծ Դքսություն", "Լիխտենշտեյն ", "Անդորրա", "Մոնակո", "Լյուքսեմբուրգ", "Լյուքսեմբուրգ")
milyon.add("Ո՞ր օվկիանոսում է գտնվում աշխարհի ամենախոր վայրը՝ Մարիանյան իջվածքը.", "Հյուսիսային Սառուցյալ", "Ատլանտյան", "Խաղաղ", "Հնդկական", "Խաղաղ")
milyon.add("Օլիմպիական դրոշի ո՞ր գույնի օղակն է ներկայացնում Եվրոպան.", "Կարմիր", "Կապույտ", "Դեղին", "Կանաչ", "Կապույտ")

milyon.startGame();
