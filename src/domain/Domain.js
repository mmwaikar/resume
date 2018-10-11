export class Score {
  constructor(gpa, percentage) {
    this.gpa = gpa;
    this.percentage = percentage;
  }
}

export class Award {
  constructor(title, date, awarder, summary) {
    this.title = title;
    this.date = date;
    this.awarder = awarder;
    this.summary = summary;
  }
}

export class Location {
  constructor(address, postalCode, city, country, region) {
    this.address = address;
    this.postalCode = postalCode;
    this.city = city;
    this.country = country;
    this.region = region;
  }
}

export class Profile {
  constructor(network, username, url) {
    this.network = network;
    this.username = username;
    this.url = url;
  }
}

export class Basics {
  constructor(name, label, picture, email, phone, website, summary, location, profiles) {
    this.name = name;
    this.label = label;
    this.picture = picture;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.summary = summary;
    this.location = location;
    this.profiles = profiles;
  }
}

export class Education {
  constructor(institution, area, studyType, startDate, endDate, score, summary, courses) {
    this.institution = institution;
    this.area = area;
    this.studyType = studyType;
    this.startDate = startDate;
    this.endDate = endDate;
    this.score = score;
    this.summary = summary;
    this.courses = courses;
  }
}

export class Interest {
  constructor(name, keywords) {
    this.name = name;
    this.keywords = keywords;
  }
}

export class Language {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}

export class Reference {
  constructor(name, reference) {
    this.name = name;
    this.reference = reference;
  }
}

export class Publication {
  constructor(name, publisher, releaseDate, website, summary) {
    this.name = name;
    this.publisher = publisher;
    this.releaseDate = releaseDate;
    this.website = website;
    this.summary = summary;
  }
}

export class Work {
  constructor(company, position, website, startDate, endDate, summary, highlights) {
    this.company = company;
    this.position = position;
    this.website = website;
    this.startDate = startDate;
    this.endDate = endDate;
    this.summary = summary;
    this.highlights = highlights;
  }
}

export class Volunteer {
  constructor(organization, position, website, startDate, endDate, summary, highlights) {
    this.organization = organization;
    this.position = position;
    this.website = website;
    this.startDate = startDate;
    this.endDate = endDate;
    this.summary = summary;
    this.highlights = highlights;
  }
}

export class Skill {
  constructor(name, level, keywords) {
    this.name = name;
    this.level = level;
    this.keywords = keywords;
  }
}

export class Resume {
  constructor(basics, work, volunteer, education, awards, publications, skills, languages, interests, references) {
    // only basics is a single prop, rest all are arrays
    this.basics = basics;
    this.work = work;
    this.volunteer = volunteer;
    this.education = education;
    this.awards = awards;
    this.publications = publications;
    this.skills = skills;
    this.languages = languages;
    this.interests = interests;
    this.references = references;
  }
}
