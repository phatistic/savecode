function SCReadValue () {
    SCSval = ""
    while (SCSaveIdx < SCSaveCode.length) {
        SCc = SCSaveCode.charAt(SCSaveIdx)
        if ("|".includes(SCc)) {
            SCSaveIdx += 1
            return SCSval
        }
        if (SCc == "\\") {
            SCSaveIdx += 1
            SCc = SCSaveCode.charAt(SCSaveIdx)
        }
        SCSval = "" + SCSval + SCc
        SCSaveIdx += 1
    }
    SCSaveIdx += 1
    return SCSval
}
function SCWriteValue (Text: string) {
    SCSval = Text
    for (let SCi = 0; SCi <= SCSval.length - 1; SCi++) {
        SCc = SCSval.charAt(SCi)
        if ("\\|".includes(SCc)) {
            SCSaveCode = "" + SCSaveCode + "\\"
        }
        SCSaveCode = "" + SCSaveCode + SCc
    }
    SCSaveCode = "" + SCSaveCode + "|"
    return SCSaveCode
}
function SCSetupSaveCode () {
    SCSaveCode = ""
    SCSaveIdx = 0
}
function SCStartingSaveCode () {
    SCSaveCode = ""
}
function SCStartingLoadCode () {
    SCSaveIdx = 0
}
let SCc = ""
let SCSaveCode = ""
let SCSaveIdx = 0
let SCSval = ""
SCSetupSaveCode()
