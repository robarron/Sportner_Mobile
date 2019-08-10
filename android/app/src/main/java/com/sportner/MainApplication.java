package com.sportner;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.ashideas.rnrangeslider.RangeSliderPackage;
import com.reactnativecommunity.slider.ReactSliderPackage;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.pusherman.networkinfo.RNNetworkInfoPackage;
import expo.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ModuleRegistryAdapter;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.imagepicker.ImagePickerPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RangeSliderPackage(),
            new ReactSliderPackage(),
            new RNGoogleSigninPackage(),
            new RNDeviceInfo(),
            new RNNetworkInfoPackage(),
            new ModuleRegistryAdapter(),
            new ModuleRegistryAdapter(),
            new FBSDKPackage(),
            new ImagePickerPackage(),
            new RNDeviceInfo(),
            new NetInfoPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
