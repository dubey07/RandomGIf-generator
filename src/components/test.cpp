#include<bits/stdc++.h>
using namespace std;

int minimumInteger(int N, vector<int> &A) {
        // code here
        
        long long  sum = 0;
        long long ans = 0;
        
        for(int i=0; i<A.size(); i++)
        sum += A[i];
        
        for(long long  j=0; j<=sum; j++) {
            
            if(j*N == sum)
            ans = min(ans,j);
        }
        return ans;
}

int main(){
    vector<int>A = {1,2,3};

    cout<<minimumInteger(3,A);
}