#include<iostream>

using namespace std;

int main(){
    for(int i=0; i<26; i++){
        cout<<int('a' + i);
        cout<<char(int('a'+i))<<" ";
    }
}