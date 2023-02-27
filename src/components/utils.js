import moment from "moment"
export const analyze = (text) => {
    if (text.includes('hi') || text.includes('hello'))
        return 'Hi, How can I help you?'
    else if (text.includes('date'))
        return moment().format('MMMM Do YYYY')
    else if (text.includes('time'))
        return moment().format('h:mm:ss a')
    else if (text.includes('google link'))
        return 'https://www.google.com'
    else if (text.lower().includes('who are you'))
        return "I'm a bot! I work so smart!"
    else if (text.includes('are you a robot'))
        return "Yes I am a robot, but I’m a good one. Let me prove it. Ask me about java script"
    else if (text.includes('how are you'))
        return "tell me yourself :D"
    else if (text.includes('whats up'))
        return "Ask me about java script, I'll tell you"
    else if (text.includes('tell me a joke'))
        return "Why is a piano hard to open? Because its keys are on the inside"
    else if (text.includes('tell me something'))
        return "Something! LoL!!!"
    else if (text.includes('happy birthday'))
        return "Thank you human!"
    else if (text.includes('javascript'))
        return "JavaScript is a scripting language. It is different from Java language. It is object-based, lightweight, cross-platform translated language. It is widely used for client-side validation. The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser."
    else if (text.includes(' features of javascript'))
        return "Lightweight,Interpreted programming language,Good for the applications which are network-centric,Complementary to Java,Complementary to HTML,Open source,Cross-platform"
    else if (text.includes('who developed javascript'))
        return "Brendan Eich"
    else if (text.includes('advantages of javascript'))
        return "Server interaction is less,Feedback to the visitors is immediate,Interactivity is high,Interfaces are richer"
    else if (text.includes('disadvantages of javascript'))
        return "No support for multithreading,No support for multiprocessing,Reading and writing of files is not allowed,No support for networking applications."
    else if (text.includes('named function in javascript'))
        return "The function which has named at the time of definition is called a named function."
    else if (text.includes('types of functions'))
        return "named, anonymous"
    else if (text.includes('anonymous function'))
        return "It is a function that has no name. These functions are declared dynamically at runtime using the function operator instead of the function declaration. "
    else if (text.includes('argument object'))
        return "The variables of JavaScript represent the arguments that are passed to a function."
    else if (text.includes('closure'))
        return "In JavaScript, we need closures when a variable which is defined outside the scope in reference is accessed from some inner scope."
    else if (text.includes('difference between javascript and jscript'))
        return "Netscape provided the JavaScript language. Microsoft changed the name and called it JScript to avoid the trademark issue. In other words, you can say JScript is the same as JavaScript, but Microsoft provides it."
    else if (text.includes('differences between java and javascript'))
        return "JavaScript is a lightweight programming language (most commonly known as scripting language) developed by Netscape, Inc. It is used to make web pages interactive. It is not a part of the Java platform. Following is a list of some key differences between Java and JavaScript"
    else if (text.includes('is javascript case sensitive'))
        return "Yes"
    else if (text.includes('BOM') || text.includes('bom'))
        return "BOM stands for Browser Object Model. It provides interaction with the browser. The default object of a browser is a window. So, you can call all the functions of the window by specifying the window or directly. The window object provides various properties like document, history, screen, navigator, location, innerHeight, innerWidth"
    else if (text.includes(' DOM') || text.includes('dom'))
        return "DOM stands for Document Object Model. A document object represents the HTML document. It can be used to access and change the content of HTML."
    else if (text.includes('different data types'))
        return "Primitive and Non-Primitive"
    else if (text.includes('difference between == and ==='))
        return "The == operator checks equality only whereas === checks equality, and data type, i.e., a value must be of the same type."
    else if (text.includes('java and javascript same'))
        return "No, they are different"
    else if (text.includes('is javascript faster'))
        return "Yes, because it doesn't require web server's support for execution."
    else if (text.includes('handle exceptions'))
        return "By the help of try/catch block, we can handle exceptions in JavaScript. JavaScript supports try, catch, finally and throw keywords for exception handling."
    else if (text.includes('react'))
        return "React is a declarative, efficient, flexible open source front-end JavaScript library developed by Facebook in 2011. It follows the component-based approach for building reusable UI components, especially for single page application. "
    else if (text.includes('jsx'))
        return "JSX stands for JavaScript XML. It is a React extension which allows writing JavaScript code that looks similar to HTML. It makes HTML file easy to understand. The JSX file makes the React application robust and boosts its performance."
    else if (text.includes('who am i'))
        return 'User'
    else if (text.includes('what is your name'))
        return 'ChatBot'
    else if (text.includes('who created you'))
        return "Paushigaa, student at KCEAI created me"
    else if (text.includes(' about kce') || text.includes('about karpagam college of engineering'))
        return "KCE is one of the best engineering colleges in coimbatore, accredited by NAAC with 'A' Grade. Karpagam College of Engineering is an autonomous institution of the Karpagam Charity Trust established in the year 2000. The college is one of the Karpagam Educational Institutions, affiliated with the Anna University of Chennai and approved by AICTE. It is also accredited by NBA, TCS, Microsoft and Wipro."
    else if (text.includes('contact kce'))
        return "No worries. Here is the website link for KCE: https://kce.ac.in/ You can also contact them by calling: +91 422 2619005 or you can simply mail to: info@kce.ac.in "
    else if (text.includes('departments'))
        return "There are various departments at KCE. Artificial Intelligence and Data Science, Automobile Engineering, Civil Engineering, ECE, EEE, ETE, Mechanical Engineering, CSE, IT, CST, CSD, CSE(CS), EIE are the departments along with the department of management studies, department of MCA"
    else if (text.includes('principal'))
        return "Dr. P. Vijayakumar is the principal of KCE"
    else if (text.includes('iqac'))
        return "To enhance the quality improvements in the academic process and also as a pre-accreditation exercise Internal Quality Assurance Cell (IQAC) was formed in the college in October 2015. The objective of the cell is to develop a system for conscious, consistent and catalytic improvement in the overall performance of the institution at all levels with the involvement of all stakeholders.The college has been now accreditated by NAAC with ‘A’ grade with the highest CGPA amongst all the colleges for which results were declared by NAAC in their 11th standing committee meeting held on 19th January 2016."
    else if (text.includes('clubs'))
        return "KCE has many student clubs to connect, engage and explore the talents of the students! Student clubs allow for further exploration and discovery in academic and non- academic areas, enabling growth experiences and learning beyond the classroom setting. Through this, students are able to develop and hone their leadership skills, as well as appreciate the value of teamwork and cooperation.,Take a peek at some of their clubs. Nature Club,Photography Club,Film Makers Club,Food and Nutrition Club,Cycling Club,Yoga/ Health Club,Journalism Club,Free Thinkers and Sky Watching Club,Ethnic Club,Leadership and Toastmasters Club,Music and Dance Club,Drawing/ Painting/ Crafts Club"
    else if (text.includes('location') || text.includes('address') || text.includes('kce located'))
        return "Myleripalayam Village, Othakkal Mandapam Post, Coimbatore - 641032, Tamilnadu, India"
}