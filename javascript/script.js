const divQ = document.querySelector('div')
const p = document.querySelector('p')
const nameQuote = document.querySelector('h3')
const next = document.querySelector('button')
let testQuote, quote
const quotes = [
{name: 'حسین پناهی', quote: 'جا مانده است چیزی جایی که هیچ گاه دیگر هیچ چیز جایش را پر نخواهد کرد... نه موهای سیاهُ نه دندان های سفید!'},
{name: 'پل الوار', quote: 'حکایت درخت خواب دیدم ما را بریدند و به کار خانه چوب بری بردند آنکه عاشق بود پنجره شد آنکه بی رحم، چوبه ی دار از من اما دری ساختند برای گذشتن.'},
{name: 'چارلی چاپلین', quote: 'شما تنها زمانی به قدرت نیاز دارید که قصد انجام کار مضری را داشته باشید در غیر این صورت عشق برای انجام هر کاری کافی ست.'},
{name: 'سینا بهمنش', quote: 'دستانم بوی گل می داد به جرم چیدن گل به کویرم تبعیدم کردند و یک نفر نگفت: شاید گلی کاشته باشد!'},
{name: 'ارد بزرگ', quote: 'هنگامی که شب فرا رسید و همه پدیدگان فرو خُفتند ابردریاها به پا می خیزند، آیا تو هم بر می خیزی !؟'},
{name: 'ژان پل سارتر', quote: 'آنقدر که از دست دادن چیزی، ما را افسرده می کند، از داشتن همان چیز احساس خوشبختی نمی کنیم... و این ذات آدمیزاد است...!'},
{name: 'نلسون ماندلا', quote: 'برای آزادی لازم نیست زمین و آسمان را بخرید، تنها خودتان را نفروشید.'},
{name: 'ساموئل بکت', quote: 'گاهی اوقات فقط باید لبخند بزنی و رد شوی بگذار خیال کنند که نفهمیدی.'},
{name: 'گارسیا مارکز', quote: 'اغلب عقل، موقعی به سراغ انسان می آید که دیگر خیلی دیر شده است...'},
{name: 'آلبرت انیشتین', quote: 'کسی که همیشه همرنگ جماعت می‌شود معمولا فراتر از آن‌ها پیش نمی‌رود کسانی که تنها مسیری را طی می‌کنند احتمالا به جاهایی می‌روند که کسی قبلادر آنجا نبوده  است'}
]

document.addEventListener('DOMContentLoaded', () => {

    quote = randomQuote(quotes.length)

    if(testQuote =! quote){

        testQuote == quote

    }else{

        quote = randomQuote(quotes.length)

    }

    p.innerHTML = quotes[quote].quote
    nameQuote.innerHTML = quotes[quote].name

})

next.addEventListener('click', () => {
    
    quote = randomQuote(quotes.length)

    if(testQuote =! quote){

        testQuote == quote

    }else{

        quote = randomQuote(quotes.length)

        if(testQuote =! quote){

            testQuote == quote

        }else{

            quote = randomQuote(quotes.length)


        }

    }

    p.innerHTML = quotes[quote].quote
    nameQuote.innerHTML = quotes[quote].name

})

let randomQuote = (len) => {

    return Math.trunc(Math.random() * len)

}