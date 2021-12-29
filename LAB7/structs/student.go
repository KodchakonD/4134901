package structs

import "fmt"

type Student struct {
	id   int
	name string
	age  int
}

func Learn() {
	james := Student{
		id:   1,
		name: "james",
		age:  15,
	}

	///slide

	Students := []Student{
		{id: 2, name: "John", age: 20},
		{id: 3, name: "Fern", age: 22},
	}

	fmt.Println(james.name)
	fmt.Println(Students[1].name)

	v := Vartex{3.21, 4.3}
	fmt.Printf("%v", v.Area())

	fmt.Println(v)
	v.Scale(10)
	fmt.Println(v)
}

//////////////////////////////////////////////

type Vartex struct {
	X, Y float32
}

func (v Vartex) Area() float32 {
	return v.X * v.Y

}

func (v *Vartex) Scale(f float32) {
	v.X = v.X * f
	v.Y = v.Y * f
}
