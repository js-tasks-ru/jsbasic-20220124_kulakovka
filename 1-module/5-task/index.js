function truncate(str, maxlength) {
    let shortSrt;

    if (str.length > maxlength) {
      shortSrt = str.substr(0, maxlength - 1) + "…";
      return shortSrt
    } else return str;

    // можно и короче:
    //return (str.length > maxlength) ?
    //str.slice(0, maxlength - 1) + '…' : str;
  }
