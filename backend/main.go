package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math"
	"net/http"
	"os"
)

// A numbers struct with 3 fields - Num1, Num2, and Operation
type numbers struct {
	Num1      float64 `json:"num1"`
	Num2      float64 `json:"num2"`
	Operation string  `json:"operation"`
}

// A calculatedResult struct with 1 field - Result
type calculatedResult struct {
	Result float64 `json:"res"`
}

// Calculation function that takes in a json post body, and returns a json response
func calc(w http.ResponseWriter, r *http.Request) {
	// Headers
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	var userInput numbers
	var res calculatedResult
	if err := json.NewDecoder(r.Body).Decode(&userInput); err != nil {
		log.Fatalln(err)
	}
	switch userInput.Operation {
	case "add":
		res.Result = userInput.Num1 + userInput.Num2
	case "subtract":
		res.Result = userInput.Num1 - userInput.Num2
	case "multiply":
		res.Result = userInput.Num1 * userInput.Num2
	case "divide":
		res.Result = userInput.Num1 / userInput.Num2
	case "sin":
		res.Result = math.Sin(userInput.Num1 * math.Pi / 180)
	case "cos":
		res.Result = math.Cos(userInput.Num1 * math.Pi / 180)
	case "tan":
		res.Result = math.Tan(userInput.Num1 * math.Pi / 180)
	case "arcsin":
		res.Result = math.Asin(userInput.Num1) * 180 / math.Pi
	case "arccos":
		res.Result = math.Acos(userInput.Num1) * 180 / math.Pi
	case "arctan":
		res.Result = math.Atan(userInput.Num1) * 180 / math.Pi
	case "exp":
		res.Result = math.Pow(userInput.Num1, userInput.Num2)
	case "log":
		res.Result = math.Log(userInput.Num1)
	default:
		log.Println("** Invalid Arithmetic Operation **")
	}
	if err := json.NewEncoder(w).Encode(res); err != nil {
		log.Fatalln(err)
	}
}

func main() {
	fmt.Println("** Server running on PORT 8000 **")
	http.HandleFunc("/api", calc)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
