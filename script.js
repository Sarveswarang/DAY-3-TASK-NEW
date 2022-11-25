//2.create yor oum resume on JSON
var resume={
    "Name":"G.SARVESWARAN",
    "DOB" :"26.11.1999",
    "Education":"BE-CIVIL",
    "Email":"abcd123@gmail.com",
     "Phone":"9998887776",
     "Language":[
        "English",
        "Tamil",
        "Hindi"
     ],
    "Experience":"Fresher",
     "Skill":["C","C++","AUTOCAD","STAAD PRO"]
}
console.log(resume);

//1.for,for in ,for each loop
// for loop
for(var i=0;i<resume.Language.length;i++)
{
   console.log(resume.Language[i]);
}
// for in loop
for(var i in resume.Skill)
{
   console.log(i,resume.Skill[i]);
}
//for each
for(let i of resume.Skill)
{
   console.log(i);
}
