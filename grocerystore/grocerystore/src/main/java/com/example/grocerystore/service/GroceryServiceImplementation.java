package com.example.grocerystore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.grocerystore.model.Grocery;
import com.example.grocerystore.repository.GroceryStore_repo;

@Service
public class GroceryServiceImplementation implements GroceryService
{
	@Autowired
	private GroceryStore_repo grocerystore_repo; // injecting the repository in our service class to perform operations on it.

	@Override
	public Grocery saveItem(Grocery item) {
		return grocerystore_repo.save(item) ;
	}

	@Override
	public Optional<Grocery> findbyitemID(int id) {
		return grocerystore_repo.findById(id);
	}

	@Override
	public List<Grocery> findByName(String name) {
		// TODO Auto-generated method stub
		return grocerystore_repo.findByitemname(name);
	}

	@Override
	public List<Grocery> getAllitems() {
		// TODO Auto-generated method stub
		return grocerystore_repo.findAll();
	}

	@Override
	public int calculatebill(int amt)// from electricity bill question
	{
		// TODO Auto-generated method stub
		int amount = amt;
		int bill=0;
		if(amount>0 && amount<=50)
			bill = amount*3;
		else if(amount>50 && amount<=150)
			bill = 50*3+(amount-50)*4;
		else if(amount>150 && amount<=250)
			bill = 50*3+100*4+(amount-150)*5;
		else
			bill = 50*3+100*4+100*5+(amount-250)*6;
		return bill;
		
	}

	
}
