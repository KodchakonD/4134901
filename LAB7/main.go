package main

import (
		"fmt"

		"fern.com/lab7/structs"
)
func main()  {
	const rname = "Kodchakon"
	var age = 22

	fmt.Printf("Hello...%s : %v",rname,age)

	if age > 22{
		fmt.Println(" > 20 ")
	}else{
		fmt.Printf(" < 20 ")
	}

	switch age {
	case 22:
		fmt.Println(" age is 20 ")
	case 27:
		fmt.Println(" age is 25 ")
	}

	var count = 0
	for count < 5{
		fmt.Printf("%v",count)
		count++
	}

	result := add(10,20)
	fmt.Printf(" \n%v ",result)

	var ptr *int 
	fmt.Printf(" \n%v ",&ptr)

	city := " Buriram "
	var cityPointer *string
	cityPointer = &city
	fmt.Println(*cityPointer)

	structs.Learn()
}

func add( a int, b int)int{
	c := a+b 
	return c
}