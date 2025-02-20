
let jsCodeData = document.querySelector('.jsCodeData')
let jsYevroCode = document.querySelector('.jsYevroCode')
let inputBox = document.querySelector('.input-box')
let yevRo = document.querySelector('.yevro')
let yellowYevro = document.querySelector('.yellowYevro')
inputBox.addEventListener('mouseenter', function () {
    jsCodeData.classList.add("hoverData");
    jsCodeData.classList.remove("data-entry__input");
    yevRo.classList.add("yevroHover");
    jsCodeData.classList.remove("yevRo");
})
inputBox.addEventListener('mouseleave', function () {
    jsCodeData.classList.add("data-entry__input");
    jsCodeData.classList.remove("hoverData");
    jsCodeData.classList.add("yevRo");
    yevRo.classList.remove("yevroHover");
    jsYevroCode.classList.remove(".yellowYevro")
    jsYevroCode.classList.remove("yevroHover");
})


jsCodeData.addEventListener('focus', function () {
    jsCodeData.classList.add("data-entry__input");
    jsCodeData.classList.remove("hoverData");
    jsYevroCode.classList.remove("yevRo");
    jsYevroCode.classList.add("yellowYevro")
})
jsCodeData.addEventListener('blur', function () {
    jsCodeData.classList.add("data-entry__input");
    jsCodeData.classList.remove("hoverData");
    jsYevroCode.classList.remove("yevRo");
    jsYevroCode.classList.remove("yellowYevro")
})
// finish input-box


// start 2xinput
let termInput = document.querySelector('.term-input')
let JsStyale = document.querySelector('.JsStyale')
let fiyYearName = document.querySelector('.fiy-year__name')


termInput.addEventListener('mouseenter', function () {
    JsStyale.classList.add("stayleFiyYear");
    JsStyale.classList.remove("fiy-year");
    fiyYearName.classList.add("stayleJsName")
    fiyYearName.classList.remove("fiy-year__name")
})
termInput.addEventListener('mouseleave', function () {
    JsStyale.classList.remove("stayleFiyYear");
    JsStyale.classList.add("fiy-year");
    fiyYearName.classList.remove("stayleJsName")
    fiyYearName.classList.add("fiy-year__name")
})

JsStyale.addEventListener('focus', function () {
    JsStyale.classList.add("fiyYearFocus");
    JsStyale.classList.remove("fiy-year");
    fiyYearName.classList.add("stayleJsFocus")
    fiyYearName.classList.remove("fiy-year__name")
})

JsStyale.addEventListener('blur', function () {
    JsStyale.classList.remove("fiyYearFocus");
    JsStyale.classList.add("fiy-year");
    fiyYearName.classList.remove("stayleJsFocus")
    fiyYearName.classList.add("fiy-year__name")
})


// 2-qism
let Inpuut2Term = document.querySelector('.term-input2')
let Styale2JS = document.querySelector('.JsStyale2')
let YearFil2Name = document.querySelector('.fiy-year__name2')

Inpuut2Term.addEventListener('mouseenter', function () {
    Styale2JS.classList.add("stayleFiyYear");
    Styale2JS.classList.remove("fiy-year2");
    YearFil2Name.classList.add("stayleJsName")
    YearFil2Name.classList.remove("fiy-year__name2")
})
Inpuut2Term.addEventListener('mouseleave', function () {
    Styale2JS.classList.remove("stayleFiyYear");
    Styale2JS.classList.add("fiy-year2");
    YearFil2Name.classList.remove("stayleJsName")
    YearFil2Name.classList.add("fiy-year__name2")

})

Styale2JS.addEventListener('focus', function () {

    Inpuut2Term.addEventListener('mouseleave', function () {
        Styale2JS.classList.remove("stayleFiyYear");
        Styale2JS.classList.add("fiy-year2");
        YearFil2Name.classList.remove("stayleJsName")
        YearFil2Name.classList.remove("fiy-year__name2")
    
    })

    Styale2JS.classList.add("fiyYearFocus");
    Styale2JS.classList.remove("fiy-year2");
    YearFil2Name.classList.add("stayleJsFocus")
    YearFil2Name.classList.remove("fiy-year__name2")

})

Styale2JS.addEventListener('blur', function () {
    Styale2JS.classList.remove("fiyYearFocus");
    Styale2JS.classList.add("fiy-yea2r");
    YearFil2Name.classList.remove("stayleJsFocus")
    YearFil2Name.classList.add("fiy-year__name2")
})

Inpuut2Term.addEventListener('mouseleave', function () {
    Styale2JS.classList.remove("stayleFiyYear");
    Styale2JS.classList.add("fiy-year2");
    YearFil2Name.classList.remove("stayleJsName")
    YearFil2Name.classList.add("fiy-year__name2")

})



// radio start


let RepaymentText = document.querySelector(".Repayment-text")
let RepayInput = document.querySelector(".Repay-input")
RepaymentText.addEventListener("click", function () {
    RepayInput.style.border = "2px solid #D8DB2F"
    RepayInput.style.background = " #fdfde6"
    OnlyInput.style.border = "2px solid #5a7684"
    OnlyInput.style.background = " transparent"
})

let OnlyInput = document.querySelector(".Only-input")
let OnlyText = document.querySelector(".Only-text")

OnlyText.addEventListener("click", function () {
    OnlyInput.style.border = "2px solid #D8DB2F"
    OnlyInput.style.background = " #fdfde6"
    RepayInput.style.border = "2px solid #5a7684"
    RepayInput.style.background = " transparent"
})

let RepayLink = document.querySelector("#Repay-link")
let onlylLink = document.querySelector("#only-link")


onlylLink.addEventListener("click", function () {
    OnlyInput.style.border = "2px solid #D8DB2F"
    OnlyInput.style.background = " #fdfde6"
    RepayInput.style.border = "2px solid #5a7684"
    RepayInput.style.background = " transparent"
})

RepayLink.addEventListener("click", function () {
    RepayInput.style.border = "2px solid #D8DB2F"
    RepayInput.style.background = " #fdfde6"
    OnlyInput.style.border = "2px solid #5a7684"
    OnlyInput.style.background = " transparent"
})
// radio finish

informationBtn = document.querySelector(".information-btn")
entryDataError = document.querySelector(".entry-data__error")
informationBtn.addEventListener("click", function () {
    if (jsCodeData.innerHTML == "") {
        entryDataError.style.display = "block"
        jsCodeData.classList.add("text-data__error")
        jsYevroCode.classList.add("yevro-data__error")


        jsCodeData.addEventListener('focus', function () {
            jsCodeData.classList.remove("data-entry__input");
            jsCodeData.classList.remove("hoverData");
            jsYevroCode.classList.remove("yevRo");
            jsYevroCode.classList.remove("yellowYevro")
        })
        inputBox.addEventListener('mouseenter', function () {
            jsCodeData.classList.remove("hoverData");
            jsCodeData.classList.remove("data-entry__input");
            yevRo.classList.remove("yevroHover");
            jsCodeData.classList.remove("yevRo");
        })
        inputBox.addEventListener('mouseleave', function () {
            jsCodeData.classList.remove("data-entry__input");
            jsCodeData.classList.remove("hoverData");
            jsCodeData.classList.remove("yevRo");
            yevRo.classList.remove("yevroHover");
            jsYevroCode.classList.remove("yellowYevro")
            jsYevroCode.classList.remove("yevroHover");
        })
    }

})

informationBtn.addEventListener("click", function () {

    let fiyYearpError = document.querySelector("#Jserrorp")

    if (JsStyale.innerHTML == "") {
        
        JsStyale.classList.add("fiy-year__Error")
        JsStyale.classList.remove("fiy-year")
        
        fiyYearName.style.background = "red"
        fiyYearName.style.color = "black"
        fiyYearName.style.border = "2px solid red"
    
        fiyYearpError.classList.add("fiy-year__pError")
        fiyYearpError.classList.remove("year__pErrorJs")

    }
    let fiyYearpError2 = document.querySelector("#Jserrorp2")
    if (Styale2JS.innerHTML == "") {
        
        Styale2JS.classList.add("fiy-year__Error")
        Styale2JS.classList.remove("fiy-year2")
        
        YearFil2Name.style.background = "red"
        YearFil2Name.style.color = "black"
        YearFil2Name.style.border = "2px solid red"
    
        fiyYearpError2.classList.add("fiy-year__pError")
        fiyYearpError2.classList.remove("year__pErrorJs")

    }
})