//
//  ContentView.swift
//  DataShareClip
//
//  Created by Timmy Jose on 24/12/24.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Welcome to the Data Sharing Demo App Clip")
            .onContinueUserActivity(NSUserActivityTypeBrowsingWeb, perform: handleUserActivity(_:))
        }
        .padding()
    }
  
  private func handleUserActivity(_ activity: NSUserActivity?) {
    guard let activity, activity.activityType == NSUserActivityTypeBrowsingWeb else { return }
    guard let invocationURL = activity.webpageURL else { return }
    print("Invocation URL = \(invocationURL)")
    
    guard let sharedUserDefaults = UserDefaults(suiteName: "group.com.timmyjose.datasharingdemo") else {
      print("Could not get UserDefaults for suite: group.com.timmyjose.datasharingdemo")
      return
    }
    
    let invocationURLStr = invocationURL.absoluteString
    sharedUserDefaults.set(invocationURLStr, forKey: "invocationURL")
    sharedUserDefaults.synchronize()
    print("Saved invocation url string to UserDefaults for suite: group.com.timmyjose.datasharingdemo")
  }
}

#Preview {
    ContentView()
}
