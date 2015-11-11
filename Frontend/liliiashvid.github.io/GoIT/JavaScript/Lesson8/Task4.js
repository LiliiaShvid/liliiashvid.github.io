function Article() {
    Article.created = new Date();
    Article.count++;
}
Article.count = 0;
Article.showStats =function () {
    console.log ('All: ' + this.count + ', The last: ' + this.created );
};

new Article();
new Article();

Article.showStats();

new Article();

Article.showStats(); 