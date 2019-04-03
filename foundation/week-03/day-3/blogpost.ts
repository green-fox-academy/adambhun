'use strict';
export { }

class BlogPost {
  authorName;
  title;
  text;
  publicationDate;

  constructor (pname?, ptitle?, ptext?, pdate?) {
    this.authorName = pname;
    this.title = ptitle;
    this.text = ptext;
    this.publicationDate = pdate;
  }
}

const lipsum = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');

const why = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');

const engineer = new BlogPost('Daniel Hanley', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');
