// Copyright Brian Haney 2022

import './App.css';
import algosdk from "algosdk";
import { PeraWalletConnect } from "@perawallet/connect";
import { useEffect } from 'react';
import logo from './Logo.png';
//import MyImage from'./flames0.png';


// perawallet instantiating
const perawallet = new PeraWalletConnect()

// algoClient
const algod_address = "" 
const algod_token = "" 
const headers = {"X-API-Key": algod_token }
const algodClient = new algosdk.Algodv2(algod_token, algod_address, headers);

//get address
const address = localStorage.getItem('address');

//MaintNet
const voteAddress1 = ''
const voteAddress2 = ''
const voteAddress3 = ''
const voteAddress4 = ''
const voteAddress5 = ''
const voteAddress6 = ''
const voteAddress7 = ''
const voteAddress8 = ''
const voteAddress9 = ''
const voteAddress10 = ''
const voteAddress11 = ''
const voteAddress12 = ''
const voteAddress13 = ''
const voteAddress14 = ''
const voteAddress15 = ''
const voteAddress16 = ''
const voteAddress17 = ''
const voteAddress18 = ''
const voteAddress19 = ''
const voteAddress20 = ''
const voteAddress21 = ''
const voteAddress22 = ''
const voteAddress23 = ''
const voteAddress24 = ''
const voteAddress25 = ''
const voteAddress26 = ''
const voteAddress27 = ''
const voteAddress28 = ''
const voteAddress29 = ''
const voteAddress30 = ''
const voteAddress31 = ''
const voteAddress32 = ''

//Asset ID
//MainNet
const ASSET_ID = 297995609;

// Algorand Wallet
// Wallet Connect
async function walletConnect() {
  const newAccounts= await perawallet.connect()
  localStorage.setItem("address", newAccounts[0]);
  window.location.reload()
  }
// wallet disconnect
const disconnect = () => {
  perawallet.disconnect()
  localStorage.removeItem("address");
  window.location.reload()
  }
 

//////////////////////////////////
/////////////////////////
const vote_transaction1 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress1,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }
/////////////////////////
const vote_transaction2 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress2,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }
/////////////////////////
const vote_transaction3 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress3,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

/////////////////////////
const vote_transaction4 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress4,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

/////////////////////////
const vote_transaction5 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress5,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }
/////////////
const vote_transaction6 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress6,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction7 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress7,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction8 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress8,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction9 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress9,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }
   
const vote_transaction10 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress10,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction11 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress11,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction12 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress12,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction13 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress13,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }
    
const vote_transaction14 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress14,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction15 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress15,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction16 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress16,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction17 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress17,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction18 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress18,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction19 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress19,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction20 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress20,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction21 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress21,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction22 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress22,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction23 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress23,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction24 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress24,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction25 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress25,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction26 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress26,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction27 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress27,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction28 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress28,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction29 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress29,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }
  
const vote_transaction30 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress30,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction31 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress31,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

const vote_transaction32 = async () => {
  try{
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: address,
      to: voteAddress32,
      amount: 2000000,
      assetIndex: ASSET_ID,
      suggestedParams,
    });
    const optInTxn = [{txn : txn, signers: [address]}]
    const signedTxn = await perawallet.signTransaction([optInTxn])
    const success = await algodClient.sendRawTransaction(signedTxn).do();
    return success
  }
  catch(err){
    console.log(err)
    return false
  }
  }

(async () => {
  let account_info149 = (await algodClient.accountInformation(voteAddress1).do());
  let asset_value149 = account_info149['assets']
  let asset_amount149 = asset_value149[0]["amount"]
  let asset_amount143 = (asset_amount149 / 100)/20000
  document.getElementById('message149').textContent = asset_amount143 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info492 = (await algodClient.accountInformation(voteAddress2).do());
  let asset_value492 = account_info492['assets']
  let asset_amount492 = asset_value492[0]["amount"]
  let asset_amount432 = (asset_amount492 / 100)/20000
  document.getElementById('message49').textContent = asset_amount432 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info78 = (await algodClient.accountInformation(voteAddress3).do());
  let asset_value78 = account_info78['assets']
  let asset_amount78 = asset_value78[0]["amount"]
  let asset_amount138 = (asset_amount78 / 100)/20000
  document.getElementById('message88').textContent = asset_amount138 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info294 = (await algodClient.accountInformation(voteAddress4).do());
  let asset_value294 = account_info294['assets']
  let asset_amount294 = asset_value294[0]["amount"]
  let asset_amount334 = (asset_amount294 / 100)/20000
  document.getElementById('message94').textContent = asset_amount334 
  })().catch(e => {
    console.log(e);
  });
  

(async () => {
  let account_info7 = (await algodClient.accountInformation(voteAddress5).do());
  let asset_value7 = account_info7['assets']
  let asset_amount7 = asset_value7[0]["amount"]
  let asset_amount13 = (asset_amount7 / 100)/20000
  document.getElementById('message8').textContent = asset_amount13 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info29 = (await algodClient.accountInformation(voteAddress6).do());
  let asset_value29 = account_info29['assets']
  let asset_amount29 = asset_value29[0]["amount"]
  let asset_amount33 = (asset_amount29 / 100)/20000
  document.getElementById('message9').textContent = asset_amount33 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info749 = (await algodClient.accountInformation(voteAddress7).do());
  let asset_value749 = account_info749['assets']
  let asset_amount749 = asset_value749[0]["amount"]
  let asset_amount743 = (asset_amount749 / 100)/20000
  document.getElementById('message749').textContent = asset_amount743 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info849 = (await algodClient.accountInformation(voteAddress8).do());
  let asset_value849 = account_info849['assets']
  let asset_amount849 = asset_value849[0]["amount"]
  let asset_amount843 = (asset_amount849 / 100)/20000
  document.getElementById('message849').textContent = asset_amount843 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info949 = (await algodClient.accountInformation(voteAddress9).do());
  let asset_value949 = account_info949['assets']
  let asset_amount949 = asset_value949[0]["amount"]
  let asset_amount943 = (asset_amount949 / 100)/20000
  document.getElementById('message949').textContent = asset_amount943 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info1049 = (await algodClient.accountInformation(voteAddress10).do());
  let asset_value1049 = account_info1049['assets']
  let asset_amount1049 = asset_value1049[0]["amount"]
  let asset_amount1043 = (asset_amount1049 / 100)/20000
  document.getElementById('message1049').textContent = asset_amount1043 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info1149 = (await algodClient.accountInformation(voteAddress11).do());
  let asset_value1149 = account_info1149['assets']
  let asset_amount1149 = asset_value1149[0]["amount"]
  let asset_amount1143 = (asset_amount1149 / 100)/20000
  document.getElementById('message1149').textContent = asset_amount1143 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info1249 = (await algodClient.accountInformation(voteAddress12).do());
  let asset_value1249 = account_info1249['assets']
  let asset_amount1249 = asset_value1249[0]["amount"]
  let asset_amount1243 = (asset_amount1249 / 100)/20000
  document.getElementById('message1249').textContent = asset_amount1243 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info1349 = (await algodClient.accountInformation(voteAddress13).do());
  let asset_value1349 = account_info1349['assets']
  let asset_amount1349 = asset_value1349[0]["amount"]
  let asset_amount1343 = (asset_amount1349 / 100)/20000
  document.getElementById('message1349').textContent = asset_amount1343 
  })().catch(e => {
    console.log(e);
  });
  
(async () => {
  let account_info1449 = (await algodClient.accountInformation(voteAddress14).do());
  let asset_value1449 = account_info1449['assets']
  let asset_amount1449 = asset_value1449[0]["amount"]
  let asset_amount1443 = (asset_amount1449 / 100)/20000
  document.getElementById('message1449').textContent = asset_amount1443 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info1549 = (await algodClient.accountInformation(voteAddress15).do());
  let asset_value1549 = account_info1549['assets']
  let asset_amount1549 = asset_value1549[0]["amount"]
  let asset_amount1543 = (asset_amount1549 / 100)/20000
  document.getElementById('message1549').textContent = asset_amount1543 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info1649 = (await algodClient.accountInformation(voteAddress16).do());
  let asset_value1649 = account_info1649['assets']
  let asset_amount1649 = asset_value1649[0]["amount"]
  let asset_amount1643 = (asset_amount1649 / 100)/20000
  document.getElementById('message1649').textContent = asset_amount1643 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info1749 = (await algodClient.accountInformation(voteAddress17).do());
  let asset_value1749 = account_info1749['assets']
  let asset_amount1749 = asset_value1749[0]["amount"]
  let asset_amount1743 = (asset_amount1749 / 100)/20000
  document.getElementById('message1749').textContent = asset_amount1743 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info1849 = (await algodClient.accountInformation(voteAddress18).do());
  let asset_value1849 = account_info1849['assets']
  let asset_amount1849 = asset_value1849[0]["amount"]
  let asset_amount1843 = (asset_amount1849 / 100)/20000
  document.getElementById('message1849').textContent = asset_amount1843 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info1949 = (await algodClient.accountInformation(voteAddress19).do());
  let asset_value1949 = account_info1949['assets']
  let asset_amount1949 = asset_value1949[0]["amount"]
  let asset_amount1943 = (asset_amount1949 / 100)/20000
  document.getElementById('message1949').textContent = asset_amount1943 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info2049 = (await algodClient.accountInformation(voteAddress20).do());
  let asset_value2049 = account_info2049['assets']
  let asset_amount2049 = asset_value2049[0]["amount"]
  let asset_amount2043 = (asset_amount2049 / 100)/20000
  document.getElementById('message2049').textContent = asset_amount2043 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info2149 = (await algodClient.accountInformation(voteAddress21).do());
  let asset_value2149 = account_info2149['assets']
  let asset_amount2149 = asset_value2149[0]["amount"]
  let asset_amount2143 = (asset_amount2149 / 100)/20000
  document.getElementById('message2149').textContent = asset_amount2143 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info2249 = (await algodClient.accountInformation(voteAddress22).do());
  let asset_value2249 = account_info2249['assets']
  let asset_amount2249 = asset_value2249[0]["amount"]
  let asset_amount2243 = (asset_amount2249 / 100)/20000
  document.getElementById('message2249').textContent = asset_amount2243 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info2349 = (await algodClient.accountInformation(voteAddress23).do());
  let asset_value2349 = account_info2349['assets']
  let asset_amount2349 = asset_value2349[0]["amount"]
  let asset_amount2343 = (asset_amount2349 / 100)/20000
  document.getElementById('message2349').textContent = asset_amount2343 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info2449 = (await algodClient.accountInformation(voteAddress24).do());
  let asset_value2449 = account_info2449['assets']
  let asset_amount2449 = asset_value2449[0]["amount"]
  let asset_amount2443 = (asset_amount2449 / 100)/20000
  document.getElementById('message2449').textContent = asset_amount2443
  })().catch(e => {
    console.log(e);
  });
    

(async () => {
  let account_info2549 = (await algodClient.accountInformation(voteAddress25).do());
  let asset_value2549 = account_info2549['assets']
  let asset_amount2549 = asset_value2549[0]["amount"]
  let asset_amount2543 = (asset_amount2549 / 100)/20000
  document.getElementById('message2549').textContent = asset_amount2543 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info2649 = (await algodClient.accountInformation(voteAddress26).do());
  let asset_value2649 = account_info2649['assets']
  let asset_amount2649 = asset_value2649[0]["amount"]
  let asset_amount2643 = (asset_amount2649 / 100)/20000
  document.getElementById('message2649').textContent = asset_amount2643 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info2749 = (await algodClient.accountInformation(voteAddress27).do());
  let asset_value2749 = account_info2749['assets']
  let asset_amount2749 = asset_value2749[0]["amount"]
  let asset_amount2743 = (asset_amount2749 / 100)/20000
  document.getElementById('message2749').textContent = asset_amount2743 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info2849 = (await algodClient.accountInformation(voteAddress28).do());
  let asset_value2849 = account_info2849['assets']
  let asset_amount2849 = asset_value2849[0]["amount"]
  let asset_amount2843 = (asset_amount2849 / 100)/20000
  document.getElementById('message2849').textContent = asset_amount2843 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info2949 = (await algodClient.accountInformation(voteAddress29).do());
  let asset_value2949 = account_info2949['assets']
  let asset_amount2949 = asset_value2949[0]["amount"]
  let asset_amount2943 = (asset_amount2949 / 100)/20000
  document.getElementById('message2949').textContent = asset_amount2943 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info3049 = (await algodClient.accountInformation(voteAddress30).do());
  let asset_value3049 = account_info3049['assets']
  let asset_amount3049 = asset_value3049[0]["amount"]
  let asset_amount3043 = (asset_amount3049 / 100)/20000
  document.getElementById('message3049').textContent = asset_amount3043 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info3149 = (await algodClient.accountInformation(voteAddress31).do());
  let asset_value3149 = account_info3149['assets']
  let asset_amount3149 = asset_value3149[0]["amount"]
  let asset_amount3143 = (asset_amount3149 / 100)/20000
  document.getElementById('message3149').textContent = asset_amount3143 
  })().catch(e => {
    console.log(e);
  });

(async () => {
  let account_info3249 = (await algodClient.accountInformation(voteAddress32).do());
  let asset_value3249 = account_info3249['assets']
  let asset_amount3249 = asset_value3249[0]["amount"]
  let asset_amount3243 = (asset_amount3249 / 100)/20000
  document.getElementById('message3249').textContent = asset_amount3243 
  })().catch(e => {
    console.log(e);
  });
  

// React functions must return a React component
function App() {
  useEffect(() => {
    perawallet.reconnectSession().then((accounts) => {
      if (accounts.length) {
        localStorage.setItem("address", accounts[0]);
      }
      perawallet.connector?.on("disconnect", () => {
        localStorage.removeItem("address");
      });
    })
    .catch((e) => console.log(e));
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>
            <div id = "displaytext" style={{ color: "blue" }}> Choice Coin Cup </div>
          </h1>
        </p>

         <table>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}> Algorand  </td>
            <td>
            <button id='button1' onClick={walletConnect}> Connect</button>
            </td>
            <td>
            <button id='button2' onClick={disconnect}> Disconnect</button>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}> Game </td>
            <td>
              <a href="https://medium.com/@ChoiceCoin/choice-coin-cup-bdb9ea415bb">
              <button id="button3">Rules</button>
              </a>
            </td>
            <td>
              <a href="https://github.com/ChoiceCoin/Compliance/tree/main/Terms_and_Conditions">
              <button id="button3">Terms</button>
              </a>
            </td>
          </tr>
         </table>
         <h4 id = "displaytext" style={{ color: "blue" }}> _________________ </h4>

        <div>
        <break>

        </break>
 
        <table>
          <tr>
            <th id = "displaytext" style={{ color: "blue" }}>Rank</th>
            <th id = "displaytext" style={{ color: "blue" }}>Choice</th>
            <th id = "displaytext" style={{ color: "blue" }}>Votes</th>
            
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction25}>Brazil</button>
            </td>   
            <td id='message2549'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction13}>France</button>
            </td>
            <td id='message1349'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction9}>Argentina</button>
            </td>
            <td id='message949'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction7}>USA</button>
            </td>
            <td id='message749'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction1}>Qatar</button>
            </td>
            <td id='message149'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction5}>England</button>
            </td>
            <td id='message8'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction2}>Ecuador</button>
            </td>
            <td id='message49'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction6}>Iran</button>
            </td>
            <td id='message9'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction3}>Senegal</button>
            </td>
            <td id='message88'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction4}>Netherlands</button>
            </td>
            <td id='message94'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction8}>Whales</button>
            </td>
            <td id='message849'></td>
          </tr>

          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction10}>Saudi Arabia</button>
            </td>
            <td id='message1049'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction14}>Australia</button>
            </td>
            <td id='message1449'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction11}>Mexico</button>
            </td>
            <td id='message1149'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction15}>Denmark</button>
            </td>
            <td id='message1549'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction12}>Poland</button>
            </td>
            <td id='message1249'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction16}>Tunisia</button>
            </td>
            <td id='message1649'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction17}>Spain</button>
            </td>
            <td id='message1749'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction21}>Belgium</button>
            </td>
            <td id='message2149'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction18}>Costa Rica</button>
            </td>
            <td id='message1849'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction22}>Canada</button>
            </td>
            <td id='message2249'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction19}>Germany</button>
            </td>
            <td id='message1949'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction23}>Morocco</button>
            </td>
            <td id='message2349'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
            <button id='button3' onClick={vote_transaction20}>Japan</button>
            </td>
            <td id='message2049'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction24}>Croatia</button>
            </td>
            <td id='message2449'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction29}>Portugal</button>
            </td>
            <td id='message2949'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction26}>Serbia</button>
            </td>  
            <td id='message2649'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction30}>Ghana</button>
            </td>
            <td id='message3049'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction27}>Switzerland</button>
            </td>
            <td id='message2749'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction31}>Uruguay</button>
            </td>
            <td id='message3149'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction28}>Cameroon</button>
            </td>
            <td id='message2849'></td>
          </tr>
          <tr>
            <td id = "displaytext" style={{ color: "blue" }}>RANK</td>
            <td>
              <button id='button3' onClick={vote_transaction32}>Korea </button>
            </td>
            <td id='message3249'></td>
          </tr>
        </table>
        </div>
        <break>
        <h3 id = "displaytext" style={{ color: "blue" }}> ______________________ </h3>
        </break>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );

}
export default App