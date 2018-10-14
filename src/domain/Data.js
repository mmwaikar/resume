import * as Domain from "./Domain";

export default class Data {

  static getResume() {
    let ghProfile = new Domain.Profile("None", "mmwaikar", "https://github.com/mmwaikar");
    let location = new Domain.Location("4/3 Tara Residency", "411038", "Pune", "India", 91, "Asia");

    let basics = new Domain.Basics("Manoj Waikar", "None", "None", "mm@w.com", "1234512345", "www.codionics.com",
      "18+ years exp.", location, [ghProfile]);

    let icax = new Domain.Work("Intercax", "Senior Software Architect", "http://intercax.com/", "15-Mar-2015",
      "Till date", "Cool place to work", ["Scala", "Neo4j"]);

    let cdac = new Domain.Education("CDAC", "Pune", "Diploma in Advanced Computing", "July-1998", "Jan-1999",
      new Domain.Score(0, 65.2), ["VB 5", "VC++", "Java"]);

    let education = [cdac];

    let angular = new Domain.Publication("Data Oriented development with AngularJS", "PacktPub", "Jun-2015",
      "www.packtpub.com", "Build data apps with AngularJS");

    let publications = [angular];

    let vb6 = new Domain.Skill("VB 6", "Expert", ["Prog Lang"]);
    let csh = new Domain.Skill("C#", "Advanced", ["Prog Lang"]);
    let java = new Domain.Skill("Java", "Advanced", ["Prog Lang"]);
    let skills = [vb6, csh, java];

    let marathi = new Domain.Language("Marathi", "Expert");
    let hindi = new Domain.Language("Hindi", "Expert");
    let english = new Domain.Language("English", "Expert");
    let languages = [english, hindi, marathi];

    let music = new Domain.Interest("Music", ["Guitar", "Singing"]);
    let reading = new Domain.Interest("Reading", ["Richard Bach", "Paulo Coelho", "Kahlil Gibran"]);
    let interests = [music, reading];

    let manas = new Domain.Reference("Manas Bajaj", "CSO");
    let references = [manas];

    let resume = new Domain.Resume(basics, [icax], [], education, [], publications, skills, languages, interests, references);
    return resume;
  }
};
