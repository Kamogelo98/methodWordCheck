function word_check(word="kamogelo")
{
    if(word.length>6){
        return "long";

    }else if(word.length<6){
        return "short";

    }else if (word.length==6){
        return "medium";
    
    }
}
 console.log(word_check("marykamogelo"));