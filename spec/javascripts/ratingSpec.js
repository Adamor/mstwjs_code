describe("Rating things", function() {

  beforeEach(function() {
    this.incomingJSON = '{"values": [0, 2, 4, 6, 8, 10], "id": 3}';
  });

  describe("calculates values from JSON", function() {

    beforeEach(function() {
      this.rating = new Rating();
      this.rating.parseJson(this.incomingJSON);
    });

    it("has the histogram values", function() {
      expect(this.rating.values[0].count).toBe(2);
      expect(this.rating.values[0].rating).toBe(1);
      expect(this.rating.values[4].count).toBe(10);
      expect(this.rating.values[4].rating).toBe(5);
    });

    it("calculates total rating count", function() {
      expect(this.rating.totalRatings).toBe(30);
    });

    it("has histogram percentages", function() {
      expect(this.rating.values[0].percentage).toBe(2.0 / 30 * 100);
      expect(this.rating.values[4].percentage).toBe(10.0 / 30 * 100);
      expect(this.rating.values[4].width).toBe(10.0 / 30 * 100 * 3);
    });

    it("calculates average rating", function() {
      expect(this.rating.averageRating).toBe(110.0 / 30);
      expect(this.rating.ratingPercentage).toBe(110.0 / 30 / 5 * 100);
    });
  });
});
