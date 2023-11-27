package com.example.grocerystore.service;

import java.util.List;
import java.util.Optional;

import com.example.grocerystore.model.Grocery;

public interface GroceryService {
	public Grocery saveItem(Grocery item);
	public Optional<Grocery> findbyitemID(int id);
	public List<Grocery> findByName(String name);
	public List<Grocery> getAllitems();
	public int calculatebill(int amt);
}
