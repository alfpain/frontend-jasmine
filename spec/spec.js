describe("First jasmine project", function() {
  it("should say hello jasmine", function() {

	expect(helloWorld()).toBe("hello world");
  });
  it("should write datable on the page", function() {

	expect(title).toBe("Learning Jasmine");
	expect(title).not.toBe(" ");
  });

  it("should include in the tittle Jasmine", function(){

	expect(title).toMatch(/JaSmiNe/i);

  });

  it("verificacion de suma", function(){
	expect(Suma(2,2)).toBe(4);
	expect(Suma(5,"4")).toBe(9);
	expect(Suma(5,"4d")).toBe(null);
	expect(Suma(-50,1000)).toBe(950);

  });
});

/*toBeGreaterThan
toBelessThan*/
