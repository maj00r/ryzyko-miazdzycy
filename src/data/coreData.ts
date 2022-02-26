export const cholesterol_MG =     [150, 190, 230, 270, 310]
export const cholesterol_MMOL =   [  4,   5,   6,   7,   8]
export const ages = [40, 50, 55, 60, 65, 70 ]
export const pressures = [120, 140, 160, 180]
export function cholesterolTypeConverter(inputCholesterolType : "mg" | "mmol", 
                                        value : number) : number {
    if (inputCholesterolType === "mg") {
        return value / 38
    } 
    if (inputCholesterolType === "mmol") {
        return value * 38
    } 
    return 0
}

// https://adst.mp.pl/img/articles/cholesterol/hipercholesterolemia/dsz-2019-tablica-polscore-640.jpg?classId=3a13f037-e0fc-4f75-a8df-f7de1341dfa6&assignmentId=b81a07a7-3e1e-4eec-8ded-9830bda74570&submissionId=c1d6b3a5-74b6-9cb4-901d-669e3d33a33d
export const propabilityTable = {
    tables: [
        {
            gender: 'male',
            isSmoking: false,
            age: 40,
            table:
            [
                [2,2,3,3,4],
                [1,2,2,2,3],
                [1,1,1,2,2],
                [1,1,1,1,1]
            ]
        },{
            gender: 'male',
            isSmoking: false,
            age: 50,
            table:
            [
                [5,6,7,8,9],
                [3,4,5,6,7],
                [2,3,3,4,5],
                [2,2,2,3,3]
            ]
        },{
            gender: 'male',
            isSmoking: false,
            age: 55,
            table:
            [
                [7,8,10,12,14],
                [5,6,7,8,10],
                [3,4,5,6,7],
                [2,3,3,4,5]
            ]
        },{
            gender: 'male',
            isSmoking: false,
            age: 60,
            table:
            [
                [11,13,15,18,21],
                [8,9,11,13,15],
                [5,6,8,9,11],
                [4,4,5,6,8]
            ]
        },{
            gender: 'male',
            isSmoking: false,
            age: 65,
            table:
            [
                [17,20,24,28,32],
                [12,14,17,20,24],
                [9,10,12,14,17],
                [6,7,9,10,12]
            ]
        },{
            gender: 'male',
            isSmoking: false,
            age: 70,
            table:
            [
                [28,33,38,43,50],
                [20,24,28,32,38],
                [14,17,20,24,28],
                [10,12,14,17,20]
            ]
        },{
            gender: 'male',
            isSmoking: true,
            age: 40,
            table:
            [
                [4,4,5,6,8],
                [3,3,4,4,5],
                [2,2,3,3,4],
                [1,1,2,2,3]
            ]
        },{
            gender: 'male',
            isSmoking: true,
            age: 50,
            table:
            [
                [9,11,13,16,18],
                [6,8,9,11,13],
                [5,5,6,8,9],
                [3,4,5,5,6]
            ]
        },{
            gender: 'male',
            isSmoking: true,
            age: 55,
            table:
            [
                [14,17,20,23,27],
                [10,12,14,17,20],
                [7,8,10,12,14],
                [5,6,7,8,10]
            ]
        },{
            gender: 'male',
            isSmoking: true,
            age: 60,
            table:
            [
                [21,25,29,34,39],
                [15,18,21,25,29],
                [11,13,15,18,21],
                [7,9,11,13,15]
            ]
        },{
            gender: 'male',
            isSmoking: true,
            age: 65,
            table:
            [
                [32,37,43,49,55],
                [23,27,32,37,43],
                [17,20,23,27,32],
                [12,14,17,20,23]
            ]
        },{
            gender: 'male',
            isSmoking: true,
            age: 70,
            table:
            [
                [49,56,62,69,76],
                [37,43,49,55,62],
                [27,32,37,43,49],
                [20,23,27,32,37]
            ]

            //fsdgafsdagdagear
        },{
            gender: 'female',
            isSmoking: false,
            age: 40,
            table:
            [
                [1,1,1,1,1],
                [0,1,1,1,1],
                [0,0,0,1,1],
                [0,0,0,0,0]
            ]
        },{
            gender: 'female',
            isSmoking: false,
            age: 50,
            table:
            [
                [2,2,2,3,3],
                [1,1,2,2,2],
                [1,1,1,1,2],
                [1,1,1,1,1]
            ]
        },{
            gender: 'female',
            isSmoking: false,
            age: 55,
            table:
            [
                [3,3,4,4,5],
                [2,2,3,3,4],
                [1,1,2,2,3],
                [1,1,1,1,2]
            ]
        },{
            gender: 'female',
            isSmoking: false,
            age: 60,
            table:
            [
                [5,6,7,8,9],
                [3,4,5,5,7],
                [2,3,3,4,5],
                [2,2,2,3,3]
            ]
        },{
            gender: 'female',
            isSmoking: false,
            age: 65,
            table:
            [
                [9,10,12,15,17],
                [6,7,9,10,12],
                [4,5,6,7,9],
                [3,3,4,5,6]
            ]
        },{
            gender: 'female',
            isSmoking: false,
            age: 70,
            table:
            [
                [17,20,24,28,32],
                [12,14,17,20,24],
                [8,10,12,14,17],
                [6,7,8,10,12]
            ]
        },{
            gender: 'female',
            isSmoking: true,
            age: 40,
            table:
            [
                [1,2,2,2,3],
                [1,1,1,2,2],
                [1,1,1,1,1],
                [0,1,1,1,1]
            ]
        },{
            gender: 'female',
            isSmoking: true,
            age: 50,
            table:
            [
                [3,4,5,5,7],
                [2,3,3,4,5],
                [2,2,2,3,3],
                [1,1,2,2,2]
            ]
        },{
            gender: 'female',
            isSmoking: true,
            age: 55,
            table:
            [
                [5,6,8,9,11],
                [4,4,5,6,7],
                [3,3,4,4,5],
                [2,2,3,3,4]
            ]
        },{
            gender: 'female',
            isSmoking: true,
            age: 60,
            table:
            [
                [9,11,13,15,18],
                [6,8,9,11,13],
                [5,5,6,8,9],
                [3,4,4,5,6]
            ]
        },{
            gender: 'female',
            isSmoking: true,
            age: 65,
            table:
            [
                [17,20,24,28,32],
                [12,14,17,20,23],
                [8,10,12,14,17],
                [6,7,8,10,12]
            ]
        },{
            gender: 'female',
            isSmoking: true,
            age: 70,
            table:
            [
                [32,37,43,49,55],
                [23,27,32,37,42],
                [17,20,23,27,32],
                [12,14,17,20,23]
            ]
        },
    ]
}
