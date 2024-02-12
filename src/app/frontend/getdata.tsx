"use client";
import { db } from "../backend/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

import { useState, useEffect, useRef } from "react";
import Button from "./button";

interface Product {
  // Define the properties of your product here
  // For example:
  asar: number;
  fajr: number;
  isha: number;
  magrib: number;
  zuhar: number;
  id: string;
}

export default function GetData() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const featuredProductsCollectionRef = collection(db, "namaz");
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(featuredProductsCollectionRef);
      setFeaturedProducts(
        data.docs.map((doc) => ({ ...(doc.data() as Product), id: doc.id }))
      );
    };
    getProducts();
  }, []);

  const [hidden, getHidden] = useState(true);
  function handleHidden() {
    getHidden(!hidden);
  }

  //Fajr
  const handleFajrDecrease = async (productId: string) => {
    const updatedProducts = featuredProducts.map((product) =>
      product.id === productId
        ? { ...product, fajr: product.fajr - 1 }
        : product
    );
    setFeaturedProducts(updatedProducts);

    // Update the value in Firebase
    await updateFajrInFirebase(
      productId,
      updatedProducts.find((p) => p.id === productId)?.fajr
    );
  };

  const handleFajrIncrease = async (productId: string) => {
    const updatedProducts = featuredProducts.map((product) =>
      product.id === productId
        ? { ...product, fajr: product.fajr + 1 }
        : product
    );
    setFeaturedProducts(updatedProducts);

    // Update the value in Firebase
    await updateFajrInFirebase(
      productId,
      updatedProducts.find((p) => p.id === productId)?.fajr
    );
  };

  const updateFajrInFirebase = async (
    productId: string,
    newFajrValue?: number
  ) => {
    const productDocRef = doc(featuredProductsCollectionRef, productId);
    await updateDoc(productDocRef, { fajr: newFajrValue });
  };

  //Fajr
  const handleAsarDecrease = async (productId: string) => {
    const updatedProducts = featuredProducts.map((product) =>
      product.id === productId
        ? { ...product, asar: product.asar - 1 }
        : product
    );
    setFeaturedProducts(updatedProducts);

    // Update the value in Firebase
    await updateAsarInFirebase(
      productId,
      updatedProducts.find((p) => p.id === productId)?.asar
    );
  };

  const handleAsarIncrease = async (productId: string) => {
    const updatedProducts = featuredProducts.map((product) =>
      product.id === productId
        ? { ...product, asar: product.asar + 1 }
        : product
    );
    setFeaturedProducts(updatedProducts);

    // Update the value in Firebase
    await updateAsarInFirebase(
      productId,
      updatedProducts.find((p) => p.id === productId)?.asar
    );
  };

  const updateAsarInFirebase = async (
    productId: string,
    newFajrValue?: number
  ) => {
    const productDocRef = doc(featuredProductsCollectionRef, productId);
    await updateDoc(productDocRef, { asar: newFajrValue });
  };

  //Zuhar
  const handleZuharDecrease = async (productId: string) => {
    const updatedProducts = featuredProducts.map((product) =>
      product.id === productId
        ? { ...product, zuhar: product.zuhar - 1 }
        : product
    );
    setFeaturedProducts(updatedProducts);

    // Update the value in Firebase
    await updateZuharInFirebase(
      productId,
      updatedProducts.find((p) => p.id === productId)?.zuhar
    );
  };

  const handleZuharIncrease = async (productId: string) => {
    const updatedProducts = featuredProducts.map((product) =>
      product.id === productId
        ? { ...product, zuhar: product.zuhar + 1 }
        : product
    );
    setFeaturedProducts(updatedProducts);

    // Update the value in Firebase
    await updateZuharInFirebase(
      productId,
      updatedProducts.find((p) => p.id === productId)?.zuhar
    );
  };

  const updateZuharInFirebase = async (
    productId: string,
    newZuharValue?: number
  ) => {
    const productDocRef = doc(featuredProductsCollectionRef, productId);
    await updateDoc(productDocRef, { zuhar: newZuharValue });
  };

  //Magrib
  const handleMagribDecrease = async (productId: string) => {
    const updatedProducts = featuredProducts.map((product) =>
      product.id === productId
        ? { ...product, magrib: product.magrib - 1 }
        : product
    );
    setFeaturedProducts(updatedProducts);

    // Update the value in Firebase
    await updateMagribInFirebase(
      productId,
      updatedProducts.find((p) => p.id === productId)?.magrib
    );
  };

  const handleMagribIncrease = async (productId: string) => {
    const updatedProducts = featuredProducts.map((product) =>
      product.id === productId
        ? { ...product, magrib: product.magrib + 1 }
        : product
    );
    setFeaturedProducts(updatedProducts);

    // Update the value in Firebase
    await updateMagribInFirebase(
      productId,
      updatedProducts.find((p) => p.id === productId)?.magrib
    );
  };

  const updateMagribInFirebase = async (
    productId: string,
    newFajrValue?: number
  ) => {
    const productDocRef = doc(featuredProductsCollectionRef, productId);
    await updateDoc(productDocRef, { magrib: newFajrValue });
  };

  //Isha
  const handleIshaDecrease = async (productId: string) => {
    const updatedProducts = featuredProducts.map((product) =>
      product.id === productId
        ? { ...product, isha: product.isha - 1 }
        : product
    );
    setFeaturedProducts(updatedProducts);

    // Update the value in Firebase
    await updateIshaInFirebase(
      productId,
      updatedProducts.find((p) => p.id === productId)?.isha
    );
  };

  const handleIshaIncrease = async (productId: string) => {
    const updatedProducts = featuredProducts.map((product) =>
      product.id === productId
        ? { ...product, isha: product.isha + 1 }
        : product
    );
    setFeaturedProducts(updatedProducts);

    // Update the value in Firebase
    await updateIshaInFirebase(
      productId,
      updatedProducts.find((p) => p.id === productId)?.isha
    );
  };

  const updateIshaInFirebase = async (
    productId: string,
    newFajrValue?: number
  ) => {
    const productDocRef = doc(featuredProductsCollectionRef, productId);
    await updateDoc(productDocRef, { isha: newFajrValue });
  };

  return (
    <div className="flex justify-center items-center">
      {featuredProducts.map((item) => (
        <div className="text-xl">
          <div className="h-[50px] mt-[10px] flex items-center justify-evenly ">
            <Button
              handleFunction={() => handleFajrDecrease(item.id)}
              hidden={hidden}
              value="-"
            />
            <h1 className="flex justify-center w-[200px]">
            Fajr: {item.fajr}
            </h1>
            <Button
              handleFunction={() => handleFajrIncrease(item.id)}
              hidden={hidden}
              value="+"
            />
          </div>
          <div className="h-[50px] mt-[10px] flex items-center justify-evenly ">
            <Button
              handleFunction={() => handleZuharDecrease(item.id)}
              hidden={hidden}
              value="-"
            />
            <h1 className="flex justify-center w-[200px]">
            Zuhar: {item.zuhar}
            </h1>
            <Button
              handleFunction={() => handleZuharIncrease(item.id)}
              hidden={hidden}
              value="+"
            />
          </div>
          <div className="h-[50px] mt-[10px] flex items-center justify-evenly">
            <Button
              handleFunction={() => handleAsarDecrease(item.id)}
              hidden={hidden}
              value="-"
            />
            <h1 className="flex justify-center w-[200px]">
            Asar: {item.asar}
            </h1>
            <Button
              handleFunction={() => handleAsarIncrease(item.id)}
              hidden={hidden}
              value="+"
            />
          </div>
          <div className="h-[50px] mt-[10px] flex items-center justify-evenly">
            <Button
              handleFunction={() => handleMagribDecrease(item.id)}
              hidden={hidden}
              value="-"
            />
            <h1 className="flex justify-center w-[200px]">
            Magrib: {item.magrib}
            </h1>
            <Button
              handleFunction={() => handleMagribIncrease(item.id)}
              hidden={hidden}
              value="+"
            />
          </div>
          <div className="h-[50px] mt-[10px] flex items-center justify-evenly">
            <Button
              handleFunction={() => handleIshaDecrease(item.id)}
              hidden={hidden}
              value="-"
            />
            <h1 className="flex justify-center w-[200px]">
            Isha: {item.isha}
            </h1>
            <Button
              handleFunction={() => handleIshaIncrease(item.id)}
              hidden={hidden}
              value="+"
            />
          </div>
        </div>
      ))}

      <div className="absolute bg-white w-full h-[100px] bottom-0 rounded-md flex justify-center  bg-gradient-to-r from-violet-600 to-indigo-600 items-center">
        <button
          onClick={handleHidden}
          className={`text-black bg-gradient-to-r ${
            hidden ? "" : "hidden"
          } from-amber-200 to-yellow-500 px-5 py-2 rounded-full`}
        >
          Edit
        </button>
        <button
          onClick={handleHidden}
          className={`bg-gradient-to-r from-teal-200 to-teal-500 px-5 py-2 rounded-full ${
            hidden ? "hidden" : ""
          }`}
        >
          Done
        </button>
      </div>
    </div>
  );
}
