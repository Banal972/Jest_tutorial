const fn = {
    add : (num1,num2)=>num1+num2,
    makeUser : (name,age) => ({name,age, gender : undefined}), // 객체를 만들어주는 함수
    throwErr : ()=>{
        throw new Error('xx'); // 일부로 에러 발생
    },
    getName : (callback)=>{
        const name ="Mike";
        setTimeout(()=>{
            callback(name); // 콜백함수를 받아 3초후에 전달
            // throw new Error('서버 에러...');
        },3000);
    },
    getAge : ()=>{
        const age = 30;
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res(age);
                // rej('error');
            },3000);
        })
    },
    connectUserDb : ()=>{
        return new Promise(res=>{
            setTimeout(()=>{
                res({
                    name : "Mike",
                    age : 30,
                    gender : "male"
                })
            },500);
        })
    },
    disconnectDb : ()=>{
        return new Promise(res=>{
            setTimeout(()=>{
                res();
            },500)
        })
    },
    connectCarDb : ()=>{
        return new Promise(res=>{
            setTimeout(()=>{
                res({
                    brand : "bmw",
                    name : "z4",
                    color : "red"
                })
            },500);
        })
    },
    disconnectCarDb : ()=>{
        return new Promise(res=>{
            setTimeout(()=>{
                res();
            },500)
        })
    },
    createUser : (name)=>{ // 실제로는 유저가 생성되는 함수
        console.log('실제로 사용자가 생성되었습니다.');
        return {
            name
        }
    }
};

module.exports = fn;