package com.example.grocerystore.controller;

import java.util.function.Supplier;

public class ResourceNotFoundException implements Supplier {

	@Override
	public Object get() {
		// TODO Auto-generated method stub
		return "No such item exists";
	}

}
