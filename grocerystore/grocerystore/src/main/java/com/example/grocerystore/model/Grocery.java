package com.example.grocerystore.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Walmart")
public class Grocery {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id; // if it gives error that default value is not assigned then write this in the SQL server
	// on PHPmyadmin - ALTER TABLE Walmart MODIFY COLUMN id INT AUTO_INCREMENT;
	private String item_name;
	private String item_type;
	private int price;
	private int stock;
	public Grocery() {
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getItem_name() {
		return item_name;
	}
	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}
	public String getItem_type() {
		return item_type;
	}
	public void setItem_type(String item_type) {
		this.item_type = item_type;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	

}
