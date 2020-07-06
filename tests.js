// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit Test for sayHello()

describe("sayHello", function () {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when passed "Jane"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    })
    it('should return the string "Hello, Alex!" when passed "Alex"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when passed "Pat', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return string "Hello, World!" when executed', function () {
       expect(sayHello()).toBe("Hello, World!")
    });
    it('should return string "Hello, World!" when passed the boolean value true', function() {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return string "Hello, World!" when passed the boolean value false', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });

});

describe("isFive", function () {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean no matter what the input", function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return true when passed 5", function () {
            expect(isFive(5)).toBe(true);
    });
    it("should return true when passed string 5", function () {
            expect(isFive("5")).toBe(true);
    });

});

describe("isEven", function () {
    it("should be a defined function", function () {
        expect(typeof isEven).toBe("function");
    });
    it("should return a boolean no matter what the input", function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return true when passed 2", function () {
        expect(isEven(2)).toBe(true);
    });
    it("should return true when passed -4", function () {
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when passed 3", function () {
        expect(isEven(3)).toBe(false);
    });
    it("should return false when passed banana", function () {
        expect(isEven("banana")).toBe(false);
    });
    it("should return true when passed string 8", function () {
        expect(isEven("8")).toBe(true);
    });
    it("should return false when passed Infinity", function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return false when passed true", function () {
        expect(isEven(true)).toBe(false);
    });
    it("should return false when passed false", function () {
        expect(isEven(false)).toBe(false);
    });
    it("should return false when passed nothing", function () {
        expect(isEven()).toBe(false);
    });
});

describe("isVowel", function () {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe("function");
    });
    it("should return a boolean no matter what the input", function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it("should return true when passed char a", function () {
        expect(isVowel("a")).toBe(true);
    });
    it("should return true when passed char A", function () {
        expect(isVowel("A")).toBe(true);
    });
    it("should return false when passed char y", function () {
        expect(isVowel("y")).toBe(false);
    });
    it("should return false when passed 4", function () {
        expect(isVowel(4)).toBe(false);
    });
    it("should return false when passed boolean", function () {
        expect(isVowel(true)).toBe(false);
    });
    it("should return true when passed string bananna", function () {
        expect(isVowel("bananna")).toBe(false);
    });
    it("should return false when passed nothing", function () {
        expect(isVowel()).toBe(false);
    });


});
describe("add", function () {
    it("should be a defined function", function () {
        expect(typeof add).toBe("function");
    });
    it("passing 2 and 3 should return 5", function () {
        expect(add(2,3)).toBe(5);
    });
    it("passing -3,-9 should return -12", function () {
        expect(add(-3,-9)).toBe(-12);
    });
    it("passing string 5,6 should return 11", function () {
        expect(add("5",6)).toBe(11);
    });
    it("passing string -4,string 10 should return 6", function () {
        expect(add("-4","10")).toBe(6);
    });
    it("passing string banana,string split should return NaN", function () {
        expect(add("banana","split")).toBe("not a number");
    });
    it("passing 2, string split should return NaN", function () {
        expect(add(2,"apples")).toBe("not a number");
    });



});