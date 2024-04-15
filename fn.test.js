const fn = require('./fn');
/* 
기본 사용
test('1은 1이야',()=>{ // '' 부분은 이름을 작성하는건데 다른 개발자들도 알수있게 작성하는게 중요
    expect(1).toBe(1); // expect 검증하는것을 toBe 기대되는값
});

test('2 더하기 3은 5야',()=>{ 
    expect(fn.add(2,3)).toBe(5); // expect에 fn.add(2,3)실행했을때 5가 나오는지 물어보는것
});

// test('3 더하기 3은 5야',()=>{ 
//     expect(fn.add(3,3)).toBe(5); // 일부로 실패하는값
// });

test('3 더하기 3은 5가 아니야',()=>{ 
    expect(fn.add(3,3)).not.toBe(5); // not을 붙여주면 아니다 라는 의미
}); */

/* test('2 더하기 3은 5야',()=>{ 
    expect(fn.add(2,3)).toBe(5);
});

test('2 더하기 3은 5야',()=>{ 
    expect(fn.add(2,3)).toEqual(5);
});
*/


/* 

자주 사용하는 Matchers

test("이름과 나이를 전달받아서 객체를 반환해줘",()=>{
    expect(fn.makeUser("Mike",30)).toBe({
        name : "Mike",
        age : 30
    })
});

test("이름과 나이를 전달받아서 객체를 반환해줘",()=>{
    expect(fn.makeUser("Mike",30)).toEqual({
        name : "Mike",
        age : 30
    })
});

test("이름과 나이를 전달받아서 객체를 반환해줘",()=>{
    expect(fn.makeUser("Mike",30)).toStrictEqual({
        name : "Mike",
        age : 30
    })
});



    toBeNull
    toBeUndefined
    toBeDefined

test("null은 null",()=>{
    expect(null).toBeNull();
});


    toBeTruthy
    toBeFalsy

test("0은 false 입니다",()=>{
    expect(fn.add(1,-1)).toBeFalsy();
});


test("비어있지 않은 문자열은 true 입니다.",()=>{
    expect(fn.add('hello','world')).toBeTruthy();
});


    toBeGraterThan 크다
    toBeGraterThanOrEqual 크거나 같다
    toBeLessThan 작다
    toBeLessThanOrEqual 작거나 같다 

// 예를들어 사용자가 입력한 아이디의 길이를 제한하거나 업로드했을때 파일용량이 적당한지 파악할때 사용하기 좋음
test("ID는 10자 이하여야 합니다.",()=>{
    const id = "THE_BLACK";
    expect(id.length).toBeLessThanOrEqual(10);
})

test("비밀번호 4자리",()=>{
    const pw = "1234";
    expect(pw.length).toBe(4);
});

test("비밀번호 4자리",()=>{
    const pw = "1234";
    expect(pw.length).toEqual(4);
});

test("0.1 더하기 0.2 는 0.3 입니다.",()=>{
    expect(fn.add(0.1,0.2)).toBeCloseTo(0.3);
});


test("Hello World 에 a 라는 글자가 있나?",()=>{
    expect("Hello World").toMatch(/H/);
});


test('유저 리스트에 Mike가 있나?',()=>{
    const user = "Mike";
    const userList = ["Tom","Mike","Kai"];
    expect(userList).toContain(user);
});

test('에러가 발생하나요?',()=>{
    expect(()=>fn.throwErr()).toThrow('oo');
});

*/


/* 

    비동기 코드 테스트



test("3초 후에 받아온 이름은 Mike",(done)=>{

    function callback(name){
        expect(name).toBe("Mike");
        done();
    }

    fn.getName(callback);

});

test("3초 후에 받아온 이름은 Mike",(done)=>{

    function callback(name){
        try {
            expect(name).toBe("Mike");
            done();
        } catch (error){
            done();
        }
    }

    fn.getName(callback);

});

test("3초 후에 받아온 나이는 30",()=>{
    return fn.getAge().then(age=>{
        expect(age).toBe(30);
    });
});

resolves, rejects 2개의 matchers 가 있음
test("3초 후에 받아온 나이는 30",()=>{
    return expect(fn.getAge()).resolves.toBe(30);
});

test("3초 후에 받아온 나이는 30",()=>{
    return expect(fn.getAge()).rejects.toMatch('error');
});

test("3초 후에 받아온 나이는 30", async ()=>{
    const age = await fn.getAge();
    expect(age).toBe(30);
});

test("3초 후에 받아온 나이는 30", async ()=>{
    await expect(fn.getAge()).resolves.toBe(30);
}); */



/* 테스트 전후 작업

let num = 10;

beforeEach(()=>{
    num = 0;
});

afterEach(()=>{
    num = 0;
});

test("0 더하기 1 은 1이야", ()=>{
    num = fn.add(num,1);
    expect(num).toBe(1);
})
test("0 더하기 2 은 2이야", ()=>{
    num = fn.add(num,2);
    expect(num).toBe(2);
})
test("0 더하기 3 은 3이야", ()=>{
    num = fn.add(num,3);
    expect(num).toBe(3);
})
test("0 더하기 4 은 4이야", ()=>{
    num = fn.add(num,4);
    expect(num).toBe(4);
})
test("0 더하기 5 은 5이야", ()=>{
    num = fn.add(num,5);
    expect(num).toBe(5);
})


let user;
beforeEach(async()=>{
    user = await fn.connectUserDb();
});
afterEach(async()=>{
    return fn.disconnectDb();
});

test('이름은 Mike', () => { 
    expect(user.name).toBe("Mike");
});

test('나이는 30', () => { 
    expect(user.age).toBe(30);
});

test('성별은 남성', () => { 
    expect(user.gender).toBe("male");
});

beforeAll, afterAll
let user;
beforeAll(async()=>{
    user = await fn.connectUserDb();
});
afterAll(async()=>{
    return fn.disconnectDb();
});

test('이름은 Mike', () => { 
    expect(user.name).toBe("Mike");
});

test('나이는 30', () => { 
    expect(user.age).toBe(30);
});

test('성별은 남성', () => { 
    expect(user.gender).toBe("male");
});

describe("Car 관련 작업",()=>{ // 비슷한 기능들을 묶을때 사용

    let car;

    beforeAll(async()=>{
        car = await fn.connectCarDb();
    });
    afterAll(async()=>{
        return fn.disconnectCarDb();
    });
    
    test('이름은 z4', () => { 
        expect(car.name).toBe("z4");
    });
    
    test('브랜드는 bmw', () => { 
        expect(car.brand).toBe('bmw');
    });
    
    test('색상은 red', () => { 
        expect(car.color).toBe("red");
    });

});


only, skip
let num = 0;

test("0 더하기 1 은 1이야", ()=>{
    expect(fn.add(num,1)).toBe(1);
})
test("0 더하기 2 은 2이야", ()=>{
    expect(fn.add(num,2)).toBe(2);
})
test("0 더하기 3 은 3이야", ()=>{
    expect(fn.add(num,3)).toBe(3);
})
test.skip("0 더하기 4 은 4이야", ()=>{
    expect(fn.add(num,4)).toBe(4);
    num = 10;
})
test("0 더하기 5 은 5이야", ()=>{
    expect(fn.add(num,5)).toBe(5);
}) */


// mock function
// const mockFn = jest.fn();

// mockFn();
// mockFn(1); // 이렇게 만든 목함수는 목이라는 프로퍼티가 있는데 이 안에는 calls 라는 배열이 있습니다.

// test('dd', () => {
//     console.log(mockFn.mock.calls);
//     expect('dd').toBe('dd');
// })

// test('함수는 2번 호출됩니다.', () => {
//     expect(mockFn.mock.calls.length).toBe(2);
// });
// test('2번째로 호출된 함수에 전달된 첫번째 인수는 1 입니다.', () => {
//     expect(mockFn.mock.calls[1][0]).toBe(1);
// });

// function forEachAdd1(arr){
//     arr.forEach(num=>{
//         // fn(num+1) 만약 함수가 굉장히 길어지고 복잡해진다고 쳤을때 굳이 함수를 작성하지말고 mock 함수를 사용해봅시다
//         mockFn(num+1); // 이렇게 전달해줍니다.
//     });
// }

// forEachAdd1([10,20,30]);

// test('함수 호출은 3번 됩니다.',()=>{
//     expect(mockFn.mock.calls.length).toBe(3);
// });

// test('전달된 값은 11, 21, 31 입니다.',()=>{
//     expect(mockFn.mock.calls[0][0]).toBe(11);
//     expect(mockFn.mock.calls[1][0]).toBe(21);
//     expect(mockFn.mock.calls[2][0]).toBe(31);
// });

// const mockFn = jest.fn(num => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test('함수 호출은 3번 됩니다.', () => {
//     console.log(mockFn.mock.results);
//     expect(mockFn.mock.calls.length).toBe(3);
// });

// test('10에서 1 증가한 값이 반환된다.', () => {
//     expect(mockFn.mock.results[0].value).toBe(11);
// });
// test('20에서 1 증가한 값이 반환된다.', () => {
//     expect(mockFn.mock.results[1].value).toBe(21);
// });
// test('30에서 1 증가한 값이 반환된다.', () => {
//     expect(mockFn.mock.results[2].value).toBe(31);
// });

// const mockFn = jest.fn();

// mockFn
// .mockReturnValueOnce(10)
// .mockReturnValueOnce(20)
// .mockReturnValueOnce(30)
// .mockReturnValue(40);

// mockFn();
// mockFn();
// mockFn();
// mockFn();

// test('dd',()=>{
//     console.log(mockFn.mock.results);
//     expect('dd').toBe('dd');
// })


// const mockFn = jest.fn();
// mockFn
// .mockReturnValueOnce(true)
// .mockReturnValueOnce(false)
// .mockReturnValueOnce(true)
// .mockReturnValueOnce(false)
// .mockReturnValue(true);
// const result = [1,2,3,4,5].filter(num => mockFn(num));

// test('홀수는 1,3,5', () => {
//     expect(result).toStrictEqual([1,3,5]);
// })


// const mockFn = jest.fn();
// mockFn
//     .mockResolvedValue({name : "Mike"});

// test("받아온 이름은 Mike",()=>{
//     mockFn().then(res=>{
//         expect(res.name).toBe("Mike");
//     })
// });


// test('유저를 만든다', () => {
//     const user = fn.createUser("Mike");
//     expect(user.name).toBe("Mike");
// })


// jest.mock('./fn'); // 이렇게하면 실제 fn함수가 실행되는것이 아닌

// fn.createUser.mockReturnValue({name : "Mike"}); // 목함수가 이것을 반환해줌

// test('유저를 만든다', () => {
//     const user = fn.createUser("Mike");
//     expect(user.name).toBe("Mike");
// })


const mockFn = jest.fn();

mockFn(10,20);
mockFn();
mockFn(30,40);

test("한번 이상 호출?",()=>{
    expect(mockFn).toBeCalled();
});
test("정확히 세번 호출?",()=>{
    expect(mockFn).toBeCalledTimes(3);
});
test("10이랑 20 전달받은 함수가 있는가?",()=>{
    expect(mockFn).toBeCalledWith(10,20);
});
test("마지막 함수는 30이랑 40 받았음",()=>{
    expect(mockFn).lastCalledWith(30,40);
});