function anchorTo(anchor){
    loc = document.location + "";
    if(loc.includes('#')){
        index = loc.indexOf('#');
        console.log(index);
        loc = loc.substr(0,index);
        console.log(loc)
    }
    document.location=loc+"#"+anchor;
    return false;
}

