package com.example.grocerystore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.grocerystore.model.Grocery;
@Repository
public interface GroceryStore_repo extends JpaRepository<Grocery,Integer>
{
	@Query("SELECT g FROM Grocery g WHERE g.item_name = :name")
	List<Grocery> findByitemname(String name);

}
