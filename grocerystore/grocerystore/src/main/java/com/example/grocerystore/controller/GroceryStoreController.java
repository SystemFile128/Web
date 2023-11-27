package com.example.grocerystore.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.grocerystore.model.Grocery;
import com.example.grocerystore.repository.GroceryStore_repo;
import com.example.grocerystore.service.GroceryService;

@RestController
@RequestMapping("/walmart")
@CrossOrigin("http://localhost:3000") // connects the backend to the frontend and also mentions which port the frontend is running on
public class GroceryStoreController {
	@Autowired
	private GroceryService groceryservice; // injecting the service bean into our controller class
	@Autowired
	private GroceryStore_repo grocerystore_repo;
	@PostMapping("/insertitem")
	public String saveitem(@RequestBody Grocery item)
	{
		item.setId(0);
		groceryservice.saveItem(item);
		return "Item added";
	}
	@GetMapping("getbyID/{id}")
	public Optional<Grocery> getbyID(@PathVariable int id)// append the ID in the path when inputting in POSTMAN
	{
		return groceryservice.findbyitemID(id);
	}
	
	@PutMapping("/getbyID/{id}")
	Grocery updateItem(@RequestBody Grocery updateditem,@PathVariable int id ) throws Throwable
	{
		Grocery g = grocerystore_repo.findById(id).orElseThrow(new ResourceNotFoundException());
		g.setItem_name(updateditem.getItem_name());
		g.setItem_type(updateditem.getItem_type());
		g.setPrice(updateditem.getPrice());
		g.setStock(updateditem.getStock());
		return grocerystore_repo.save(g);
		}
	@GetMapping("/getbyName")
	List<Grocery> itemNamestartswith(@RequestParam("name")String name)
	{
		return groceryservice.findByName(name);
	}
	@GetMapping("/getall")
	List<Grocery> findallitems()
	{
		return groceryservice.getAllitems();
	}
	@GetMapping("/calculate/{amount}")
	int calculatebill(@PathVariable int amount)
	{
		return groceryservice.calculatebill(amount);
	}
	@GetMapping("/calc")
	public int calc(@RequestParam("amount") int amount)
	{
		return groceryservice.calculatebill(amount);
	}
		
		
	}
