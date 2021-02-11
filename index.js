class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    try{
      return string.match(/[a-zA-Z0-9\-' ]+/g).join('')
    }
    catch(e){
      return ''
    }
  }

  static titleize(string){
    return string.split(' ').map((word, index) => {
      if(index === 0){
        return this.capitalize(word)
      }else if(!word.match(/\bthe\b|\ba\b|\ban\b|\bbut\b|of\b|\band\b|\bfor\b|\bat\b|\bby\b|\band\b|\bfrom\b/)){
        return this.capitalize(word)
      }else{
        return word
      }
    }).join(' ')
  }
}